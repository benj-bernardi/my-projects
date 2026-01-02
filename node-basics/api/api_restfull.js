// REST API Study

import express from "express";
import pool from "./database/db_api_restfull.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log("The server is running on http://localhost:3000/");
});

// Root route:
app.get('/', (req, res) => {
  res.send("Welcome to the REST API!");
});

// List all users:
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Create a new user:
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }
  
    const newUser = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]);

    res.status(201).json(newUser.rows[0]);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Delete user by id:
app.delete("/users/:id", async (req, res) => {
  try{ 
    const { id } = req.params;

    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);

    if (result.rowCount === 0){
      return res.status(404).json({ error: "User not found." });
    }

    res.status(204).send();  
  }
  catch (err){
    console.log(err);
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Update user by ID
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email){
      return res.status(400).json({ error: "Name and email are required" });
    }

    const index = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id]);

    if (index.rows.length === 0){
      return res.status(404).json({ error: "User not found" });
    }

    const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [name, email, id]);

    res.status(204).send();
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "DATABASE error" });
  }
});

