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

//-------------------------------------

// Create a new task
app.post("/tasks", (req, res) => {
  //...
});

// Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  //...
});

// Update only specific fields of a task (PATCH)
app.patch("/tasks/:id", (req, res) => {
  //...
});