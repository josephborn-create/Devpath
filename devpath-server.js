// devpath-server.js — API for DevPath lesson progress
const express = require("express");
const cors = require("cors");
const db = require("./devpath-db");
const app = express();
const PORT = process.env.PORT || 3002;

// Allow requests from your deployed frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
}));
app.use(express.json());

// ── GET /api/progress ── get all completed lessons ──
app.get("/api/progress", (req, res) => {
  const progress = db.getProgress();
  res.json(progress);
});

// ── POST /api/progress/:lessonId ── toggle a lesson's completion ──
app.post("/api/progress/:lessonId", (req, res) => {
  const { lessonId } = req.params;
  const isCurrentlyComplete = db.isCompleted(lessonId);

  if (isCurrentlyComplete) {
    db.uncompleteLesson(lessonId);
    res.json({ lessonId, completed: false });
  } else {
    db.completeLesson(lessonId);
    res.json({ lessonId, completed: true });
  }
});

// ── Start the server ──
app.listen(PORT, () => {
  console.log("──────────────────────────────────────────");
  console.log("  DevPath Progress API on http://localhost:" + PORT);
  console.log("──────────────────────────────────────────");
  console.log("");
  console.log("  Endpoints:");
  console.log("    GET  /api/progress              Get all progress");
  console.log("    POST /api/progress/:lessonId    Toggle lesson");
  console.log("");
});
