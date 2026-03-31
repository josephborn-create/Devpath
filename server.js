const http = require("http");
const PORT = 3001;

// ─── In-memory data store ────────────────────────────────────────────────────
let bookmarks = [
  { id: 1, name: "React Docs", url: "https://react.dev" },
  { id: 2, name: "MDN Web Docs", url: "https://developer.mozilla.org" },
  { id: 3, name: "Claude Code", url: "https://claude.ai" },
];
let nextId = 4;

// ─── Helper: parse JSON body from a request ──────────────────────────────────
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

// ─── Helper: send a JSON response ────────────────────────────────────────────
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data, null, 2));
}

// ─── The Server ──────────────────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // ── GET /api/bookmarks ── list all bookmarks ──
  if (method === "GET" && url === "/api/bookmarks") {
    return sendJSON(res, 200, bookmarks);
  }

  // ── GET /api/bookmarks/:id ── get one bookmark ──
  if (method === "GET" && url.match(/^\/api\/bookmarks\/\d+$/)) {
    const id = parseInt(url.split("/").pop());
    const bookmark = bookmarks.find((b) => b.id === id);
    if (!bookmark) return sendJSON(res, 404, { error: "Bookmark not found" });
    return sendJSON(res, 200, bookmark);
  }

  // ── POST /api/bookmarks ── create a new bookmark ──
  if (method === "POST" && url === "/api/bookmarks") {
    try {
      const { name, url: bookmarkUrl } = await parseBody(req);
      if (!name || !bookmarkUrl) {
        return sendJSON(res, 400, { error: "Name and URL are required" });
      }
      const bookmark = { id: nextId++, name, url: bookmarkUrl };
      bookmarks.push(bookmark);
      return sendJSON(res, 201, bookmark);
    } catch {
      return sendJSON(res, 400, { error: "Invalid JSON body" });
    }
  }

  // ── DELETE /api/bookmarks/:id ── delete a bookmark ──
  if (method === "DELETE" && url.match(/^\/api\/bookmarks\/\d+$/)) {
    const id = parseInt(url.split("/").pop());
    const index = bookmarks.findIndex((b) => b.id === id);
    if (index === -1) return sendJSON(res, 404, { error: "Bookmark not found" });
    const deleted = bookmarks.splice(index, 1)[0];
    return sendJSON(res, 200, { message: "Deleted", bookmark: deleted });
  }

  // ── PUT /api/bookmarks/:id ── update a bookmark ──
  if (method === "PUT" && url.match(/^\/api\/bookmarks\/\d+$/)) {
    const id = parseInt(url.split("/").pop());
    const bookmark = bookmarks.find((b) => b.id === id);
    if (!bookmark) return sendJSON(res, 404, { error: "Bookmark not found" });
    try {
      const { name, url: bookmarkUrl } = await parseBody(req);
      if (name) bookmark.name = name;
      if (bookmarkUrl) bookmark.url = bookmarkUrl;
      return sendJSON(res, 200, bookmark);
    } catch {
      return sendJSON(res, 400, { error: "Invalid JSON body" });
    }
  }

  // ── 404 fallback ──
  sendJSON(res, 404, { error: "Not found", availableEndpoints: [
    "GET    /api/bookmarks",
    "GET    /api/bookmarks/:id",
    "POST   /api/bookmarks",
    "PUT    /api/bookmarks/:id",
    "DELETE /api/bookmarks/:id",
  ]});
});

server.listen(PORT, () => {
  console.log("──────────────────────────────────────────");
  console.log("  Bookmark API running on http://localhost:" + PORT);
  console.log("──────────────────────────────────────────");
  console.log("");
  console.log("  Endpoints:");
  console.log("    GET    /api/bookmarks        List all");
  console.log("    GET    /api/bookmarks/:id    Get one");
  console.log("    POST   /api/bookmarks        Create");
  console.log("    PUT    /api/bookmarks/:id    Update");
  console.log("    DELETE /api/bookmarks/:id    Delete");
  console.log("");
});