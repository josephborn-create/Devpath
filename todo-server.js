const http = require("http");
const PORT = 3002;

// ─── In-memory data store ────────────────────────────────────────────────────
let todos = [
  { id: 1, text: "Learn HTML & CSS", done: true },
  { id: 2, text: "Learn JavaScript", done: true },
  { id: 3, text: "Build a React app", done: false },
  { id: 4, text: "Create a REST API", done: false },
];
let nextId = 5;

// ─── Helpers ─────────────────────────────────────────────────────────────────
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data, null, 2));
}

// ─── Server ──────────────────────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // ── GET /api/todos ── list all todos ──
  if (method === "GET" && url === "/api/todos") {
    const remaining = todos.filter((t) => !t.done).length;
    return sendJSON(res, 200, {
      todos,
      count: todos.length,
      remaining,
    });
  }

  // ── GET /api/todos/:id ── get one todo ──
  if (method === "GET" && url.match(/^\/api\/todos\/\d+$/)) {
    const id = parseInt(url.split("/").pop());
    const todo = todos.find((t) => t.id === id);
    if (!todo) return sendJSON(res, 404, { error: "Todo not found" });
    return sendJSON(res, 200, todo);
  }

  // ── POST /api/todos ── create a new todo ──
  if (method === "POST" && url === "/api/todos") {
    try {
      const { text } = await parseBody(req);
      if (!text || !text.trim()) {
        return sendJSON(res, 400, { error: "Text is required" });
      }
      const todo = { id: nextId++, text: text.trim(), done: false };
      todos.push(todo);
      return sendJSON(res, 201, todo);
    } catch {
      return sendJSON(res, 400, { error: "Invalid JSON body" });
    }
  }

  // ── PATCH /api/todos/:id/toggle ── toggle done status ──
  if (method === "PATCH" && url.match(/^\/api\/todos\/\d+\/toggle$/)) {
    const id = parseInt(url.split("/")[3]);
    const todo = todos.find((t) => t.id === id);
    if (!todo) return sendJSON(res, 404, { error: "Todo not found" });
    todo.done = !todo.done;
    return sendJSON(res, 200, todo);
  }

  // ── DELETE /api/todos/:id ── delete a todo ──
  if (method === "DELETE" && url.match(/^\/api\/todos\/\d+$/)) {
    const id = parseInt(url.split("/").pop());
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) return sendJSON(res, 404, { error: "Todo not found" });
    const deleted = todos.splice(index, 1)[0];
    return sendJSON(res, 200, { message: "Deleted", todo: deleted });
  }

  // ── 404 fallback ──
  sendJSON(res, 404, {
    error: "Not found",
    endpoints: [
      "GET     /api/todos            List all todos",
      "GET     /api/todos/:id        Get one todo",
      "POST    /api/todos            Create a todo  { text: '...' }",
      "PATCH   /api/todos/:id/toggle Toggle done status",
      "DELETE  /api/todos/:id        Delete a todo",
    ],
  });
});

server.listen(PORT, () => {
  console.log("──────────────────────────────────────────");
  console.log("  Todo API running on http://localhost:" + PORT);
  console.log("──────────────────────────────────────────");
  console.log("");
  console.log("  Endpoints:");
  console.log("    GET     /api/todos            List all");
  console.log("    GET     /api/todos/:id        Get one");
  console.log("    POST    /api/todos            Create   { text }");
  console.log("    PATCH   /api/todos/:id/toggle Toggle done");
  console.log("    DELETE  /api/todos/:id        Delete");
  console.log("");
});
