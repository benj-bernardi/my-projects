import express from "express";
import pool from "./database/db_api_books.js";

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
app.get("/books", async (req, res) => {
  try {
    const getBooks = await pool.query("SELECT * FROM books");
    res.status(200).json(getBooks.rows);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get book by ID
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getBookbyID = await pool.query(
      "SELECT * FROM books WHERE id = $1", [id]);

    if (getBookbyID.rowCount === 0){
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(getBookbyID.rows[0]);
  }
  catch (err){
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new book
app.post("/books", async (req, res) => {
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
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a book
app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params; 
    const { author, title } = req.body; 

    if (!author || !title){
      return res.status(400).json({ error: "Author and title are required" });
    }
    const booksExist = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

    if (booksExist.rows.length === 0){
      return res.status(404).json({ error: "Book not found" });
    }
    
    const updateBook = await pool.query("UPDATE books SET author = $1, title = $2 WHERE id = $3 RETURNING *", [author, title, id]);

    res.status(204).send();
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete route
app.delete("/books/:id", async (req, res) => {
  try { 
    const { id } = req.params;

    const deleteBook = await pool.query("DELETE FROM books WHERE id = $1", [id]);

    if (deleteBook.rowCount === 0){
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(204).send();
  }
  catch (err) { 
    console.log(err);
    res.status(500).json({ error: "Internal Server Error"});
  }
});

// Update a book partially
app.patch("/books/:id", async (req, res) => {
  try {
    const { id } = req.params; 
    const { author, title } = req.body; 

    if (author === undefined && title === undefined){
      return res.status(400).json({ error: "Nothing to update" });
    }

    const updateBook = await pool.query(
    "UPDATE books SET author = COALESCE($1, author), title = COALESCE($2, title) WHERE id = $3",
    [author, title, id]);

    if (updateBook.rowCount === 0){ 
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(204).send();
  }
  catch (err){
    console.log(err); 
    res.status(500).json({ error: "Internal Server Error" });
  }
});