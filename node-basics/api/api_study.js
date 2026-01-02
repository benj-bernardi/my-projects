// EXPRESS CRUD
import express from "express";
import pool from  "./database/db_api_study.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("API is running at: http://localhost:3000/");
});

app.get("/", (req, res) => {
    res.send("Welcome to the users API.");
});

app.get("/users", async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.status(200).json(users.rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "DATABASE error" });
    }
});

app.post("/users", async (req, res) => {
    try {
        const { name, password } = req.body;

        if (!name || !password){
            return res.status(400).json({ error: "Name and password are required." });
        }

        const newUser = await pool.query("INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *", [name, password]);

        res.status(201).json(newUser.rows[0]);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "DATABASE error" });
    }
});

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, password } = req.body;

        if (!name || !password){
            return res.status(400).json({ error: "Name and password are required" });
        }

        const updateUser = await pool.query("UPDATE users SET name = $1, password = $2 WHERE id = $3 RETURNING *", [name, password, id]);

        if (updateUser.rowCount === 0){
            return res.status(404).json({ error: "User not found" });
        }

        res.status(204).send();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "DATABASE error" });
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);

        if (result.rowCount === 0){
            return res.status(404).json({ error: "User not found" });
        }

        res.status(204).send();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "DATABASE error" });
    }
});