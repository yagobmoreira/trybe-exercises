const express = require('express');

const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/health/live', (_req, res) => {
  return res.sendStatus(200);
})

app.get('/books', Book.getAll);
app.get('/books/:id', Book.getById);
app.post('/books', Book.createBook);
app.put('/books/:id', Book.updateBook);
app.delete('/books/:id', Book.deleteBook);

module.exports = app;