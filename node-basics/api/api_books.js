import express from "express";
import pool from "./database/db_api_books";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:3000/`);
});

// Root route
app.get('/', (req, res) => {
  res.send("Book API is online!");
});

// Get all books
app.get('/books', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.status(200).json(result.rows);
  }
  catch (err) {
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Create a new book
app.post('/books', async (req, res) => {
  try {
    const { author, title } = req.body;

    if (!author || !title) {
      return res.status(400).json({ error: "Author and title are required." });
    }

    const newBook = await pool.query(
      "INSERT INTO books (author, title) VALUES ($1, $2) RETURNING *",
      [author, title]
    );

    res.status(201).json(newBook.rows[0]);
  }
  catch (err) {
    res.status(500).json({ error: "DATABASE error" });
  }
});

// Update a book
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { author, title } = req.body;

  if ( !author || !title ){
    return res.status(400).json({ error: "Author and title are required" });
  }

  const index = books.findIndex(book => book.id == id);

  if (index === -1){
    return res.status(404).json({ error: "Book not found" });
  }

  books[index] = {
        id: books[index].id,
        author,
        title
    };

  return res.status(200).json({ message: "Book updated successfully", book: books[index] });
});

// Delete route
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;

  const index = books.findIndex(b => b.id == id);

  if (index === -1){
    return res.status(400).json({ error: "Book not found" });
  }

  books.splice(index, 1);

  return res.status(200).json({ message: "Book deleted successfully" });
});