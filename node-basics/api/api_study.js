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

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ error: "Name and password are required." });
    }

    const index = users.findIndex(user => user.id == id);

    if (index === -1) {
        return res.status(404).json({ error: "User not found." });
    }

    users[index] = {
        id: users[index].id,
        name,
        password
    };

    return res.status(200).json({ message: "User updated successfully.", user: users[index]});
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.body;

    const index = users.findIndex(u => u.id == id);

    if (index === -1){
        return res.status(400).json({ error: "User not found" });
    }

    users.splice(index, 1);

    res.status(200).json({ message: "User deleted successfully" });
})