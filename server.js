// server.js — Bookmark API with SQLite database
const express = require("express");
const db = require("./db");
const app = express();
const PORT = 3001;

app.use(express.json());

// ── GET /api/bookmarks ── list all (with optional search) ──
app.get("/api/bookmarks", (req, res) => {
  const { q } = req.query;
  const bookmarks = q ? db.search(q) : db.getAll();
  res.json(bookmarks);
});

// ── GET /api/bookmarks/:id ── get one bookmark ──
app.get("/api/bookmarks/:id", (req, res) => {
  const bookmark = db.getById(req.params.id);
  if (!bookmark) return res.status(404).json({ error: "Not found" });
  res.json(bookmark);
});

// ── POST /api/bookmarks ── create a new bookmark ──
app.post("/api/bookmarks", (req, res) => {
  const { name, url } = req.body;
  if (!name || !url) return res.status(400).json({ error: "Name and URL required" });
  const bookmark = db.create(name, url);
  res.status(201).json(bookmark);
});

// ── DELETE /api/bookmarks/:id ── delete a bookmark ──
app.delete("/api/bookmarks/:id", (req, res) => {
  const deleted = db.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Not found" });
  res.status(204).send();
});

// ── Start the server ──
app.listen(PORT, () => {
  console.log("──────────────────────────────────────────");
  console.log("  Bookmark API running on http://localhost:" + PORT);
  console.log("  Now with SQLite database!");
  console.log("──────────────────────────────────────────");
  console.log("");
  console.log("  Endpoints:");
  console.log("    GET    /api/bookmarks         List all");
  console.log("    GET    /api/bookmarks?q=term  Search");
  console.log("    GET    /api/bookmarks/:id     Get one");
  console.log("    POST   /api/bookmarks         Create");
  console.log("    DELETE /api/bookmarks/:id      Delete");
  console.log("");
});
