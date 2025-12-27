import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Postgress integration

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:3000/`);
});

// Get all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// Root route
app.get('/', (req, res) => {
  res.send("Book API is online!");
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