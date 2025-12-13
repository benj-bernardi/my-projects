// EXPRESS CRUD
import express from "express";

const app = express();
const PORT = 3000;
const users = [];

app.use(express.json());

app.listen(PORT, () => {
    console.log("API is running at: http://localhost:3000/");
});

app.get("/", (req, res) => {
    res.send("Welcome to the users API.");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ error: "Name and password are required." });
    }

    const newUser = {
        id: Date.now(),
        name,
        password
    };

    users.push(newUser);

    return res.status(201).json(newUser);
});
