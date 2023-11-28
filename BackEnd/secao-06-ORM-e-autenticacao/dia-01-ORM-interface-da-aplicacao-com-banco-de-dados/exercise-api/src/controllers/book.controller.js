const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' }); 
  }
}

module.exports = {
  getAll,
}