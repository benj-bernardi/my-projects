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

// Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const index = todoList.findIndex(task => task.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  todoList.splice(index, 1);

  return res.status(200).json({ message: "Task deleted successfully" });
});
