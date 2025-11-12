import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [];

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

// Create a new book
app.post('/books', (req, res) => {
  const { author, title } = req.body;

  if (!author || !title) {
    return res.status(400).json({ error: "Author and title are required." });
  }

  const newBook = { id: Date.now(), author, title };
  books.push(newBook);

  return res.status(201).json({ newBook });
});

// Get all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// Root route
app.get('/', (req, res) => {
  res.send("Book API is online!");
});
