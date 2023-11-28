const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const { author } = req.query;
    let books;
    if (author) {
      books = BookService.getByAuthor(author);
    } else {
      books = BookService.getAll();
    }
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' }); 
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity);

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BookService.updateBook(id, title, author, pageQuantity);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    
    return res.status(200).json({ message: "Book updated"});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResponse = await BookService.deleteBook(id);
    if (!deleteResponse) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book deleted!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500Message });
  }
};


module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}