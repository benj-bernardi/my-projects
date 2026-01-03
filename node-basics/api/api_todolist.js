import express from "express";
import pool from "./database/db_api_todolist.js"

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Tasks API is running at: http://localhost:3000/`);
});

// Home route
app.get("/", (req, res) => {
  res.send("Task API is online!");
});

// List all tasks
app.get("/tasks", async (req, res) => {
  try {
    const getTasks = await pool.query("SELECT * FROM todolist");
    res.status(200).json(getTasks.rows);
  }
  catch (err) { 
    console.log(err);
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Create a new task
app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title){
      return res.status(400).json({ error: "Title is required" });
    }

    const newTask = await pool.query("INSERT INTO todolist (title) VALUES ($1) RETURNING *", [title]);

    res.status(201).json(newTask.rows[0]);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Delete a task by ID
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await pool.query("DELETE FROM todolist WHERE id = $1", [id]);

    if (deleteTask.rowCount === 0){
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(204).send();
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Update only specific fields of a task (PATCH)
app.patch("/tasks/:id", async (req, res) => {
 //...
});