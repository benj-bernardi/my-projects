// REST API Study

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

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

  const newUser = { id: Date.now(), name, email };
  users.push(newUser);

  return res.status(201).json(newUser);
});

// List all users:
app.get('/users', (req, res) => {
  res.status(200).json(users);
});
