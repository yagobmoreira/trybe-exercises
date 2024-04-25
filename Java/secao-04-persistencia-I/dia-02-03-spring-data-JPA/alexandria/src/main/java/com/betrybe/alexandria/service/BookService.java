package com.betrybe.alexandria.service;

import com.betrybe.alexandria.entity.Book;
import com.betrybe.alexandria.repository.BookRepository;
import com.betrybe.alexandria.service.exception.BookNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
  private final BookRepository bookRepository;

  @Autowired
  public BookService(BookRepository bookRepository) {
    this.bookRepository = bookRepository;
  }

  public Book findById(Long id) throws BookNotFoundException{
    return bookRepository.findById(id).orElseThrow(BookNotFoundException::new);
  }

  public List<Book> findAll() {
    return bookRepository.findAll();
  }

  public Book create(Book newBook) {
    return bookRepository.save(newBook);
  }

  public Book update(Long id, Book newBook) throws BookNotFoundException {
    Book bookFromDB = findById(id);

    bookFromDB.setTitle(newBook.getTitle());
    bookFromDB.setGenre(newBook.getGenre());

    return bookRepository.save(bookFromDB);
  }

  public Book delete(Long id) throws BookNotFoundException {
    Book book = findById(id);

    bookRepository.delete(book);

    return book;
  }
}
