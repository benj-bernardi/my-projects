import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const todoList = [];

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Home route
app.get("/", (req, res) => {
  res.send("Task API is online!");
});

// List all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(todoList);
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { task, done } = req.body;

  if (!task || done === undefined) {
    return res.status(400).json({ error: "task and done are required" });
  }

  const newTask = { id: Date.now(), task, done };

  todoList.push(newTask);

  return res.status(201).json(newTask);
});
