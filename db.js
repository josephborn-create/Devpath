// db.js — Database setup and helper functions
const Database = require("better-sqlite3");
const db = new Database("bookmarks.db");

// Create the table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS bookmarks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Helper functions
const getAll = () =>
  db.prepare("SELECT * FROM bookmarks ORDER BY created_at DESC").all();

const getById = (id) =>
  db.prepare("SELECT * FROM bookmarks WHERE id = ?").get(id);

const create = (name, url) => {
  const result = db
    .prepare("INSERT INTO bookmarks (name, url) VALUES (?, ?)")
    .run(name, url);
  return getById(result.lastInsertRowid);
};

const remove = (id) => {
  const result = db.prepare("DELETE FROM bookmarks WHERE id = ?").run(id);
  return result.changes > 0;
};

const search = (query) => {
  return db
    .prepare("SELECT * FROM bookmarks WHERE name LIKE ?")
    .all("%" + query + "%");
};

module.exports = { getAll, getById, create, remove, search };
