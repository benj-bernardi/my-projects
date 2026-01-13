// EXPRESS CRUD

import express from "express";
import pool from  "./database/db_api_restful.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("API is running at: http://localhost:3000/");
});

// Get Route
app.get("/", (req, res) => {
    res.send("Welcome to the users API.");
});

// Get Route
app.get("/users", async (req, res, next) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.status(200).json(users.rows);
    } catch (err) {
       next(err);
    }
});

app.get("/users/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        const getUserbyID = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        if (getUserbyID.rowCount === 0){
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(getUserbyID.rows[0]);
    } catch (err) {
        next(err);
    }
})

// Post Route
app.post("/users", async (req, res, next) => {
    try {
        const { name, password } = req.body;

        if (!name || !password){
            return res.status(400).json({ error: "Name and password are required." });
        }

        const newUser = await pool.query("INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *", [name, password]);

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        next(err);
    }
});

// Update user by ID 
app.put("/users/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, password } = req.body;

        if (!name || !password){
            return res.status(400).json({ error: "Name and password are required" });
        }

        const updateUser = await pool.query("UPDATE users SET name = $1, password = $2 WHERE id = $3", [name, password, id]);

        if (updateUser.rowCount === 0){
            return res.status(404).json({ error: "User not found" });
        }

        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

// Delete Route
app.delete("/users/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [id]);

        if (deleteUser.rowCount === 0){
            return res.status(404).json({ error: "User not found" });
        }

        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

// Update user by ID partially
app.patch("/users/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, password } = req.body;

        if (name === undefined && password === undefined){
            return res.status(400).json({ error: "Nothing to update" });
        }

        const updateUser = await pool.query(
        "UPDATE users SET name = COALESCE($1, name), password = COALESCE($2, password) WHERE id = $3",
        [name, password, id]);

        if (updateUser.rowCount === 0){
            return res.status(404).json({ error: "User not found" });
        }

        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

app.use(errorHandler);