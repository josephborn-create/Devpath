// devpath-db.js — SQLite database for DevPath lesson progress
const Database = require("better-sqlite3");
const db = new Database("devpath-progress.db");

// Create the table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS progress (
    lesson_id TEXT PRIMARY KEY,
    completed_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Get all completed lessons as an object like { "html-first-page": true, "css-styling": true }
const getProgress = () => {
  const rows = db.prepare("SELECT lesson_id FROM progress").all();
  const result = {};
  for (const row of rows) {
    result[row.lesson_id] = true;
  }
  return result;
};

// Mark a lesson as completed
const completeLesson = (lessonId) => {
  db.prepare(
    "INSERT OR IGNORE INTO progress (lesson_id) VALUES (?)"
  ).run(lessonId);
};

// Unmark a lesson (toggle it back to incomplete)
const uncompleteLesson = (lessonId) => {
  db.prepare("DELETE FROM progress WHERE lesson_id = ?").run(lessonId);
};

// Check if a specific lesson is completed
const isCompleted = (lessonId) => {
  const row = db
    .prepare("SELECT lesson_id FROM progress WHERE lesson_id = ?")
    .get(lessonId);
  return !!row;
};

module.exports = { getProgress, completeLesson, uncompleteLesson, isCompleted };
