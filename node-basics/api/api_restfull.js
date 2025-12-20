// REST API Study

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];
let nextID = 1;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Root route:
app.get('/', (req, res) => {
  res.send("Welcome to the REST API!");
});

// Create a new user:
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const newUser = { id: nextID++, name, email };
  users.push(newUser);

  return res.status(201).json(newUser);
});

// List all users:
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// Delete user by id:
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(user => user.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found." });
  }

  users.splice(index, 1);

  res.status(200).json({ message: "User deleted successfully." });
});

// Update user by ID
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required." });
    }

    const index = users.findIndex(user => user.id == id);

    if (index === -1) {
        return res.status(404).json({ error: "User not found." });
    }

    users[index] = {
        id: users[index].id,
        name,
        email
    };

    return res.status(200).json({ message: "User updated successfully.", user: users[index] });
});

