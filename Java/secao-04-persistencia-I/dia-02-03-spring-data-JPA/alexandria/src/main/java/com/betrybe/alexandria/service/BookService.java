package com.betrybe.alexandria.service;

import com.betrybe.alexandria.entity.Book;
import com.betrybe.alexandria.entity.BookDetail;
import com.betrybe.alexandria.repository.BookDetailRepository;
import com.betrybe.alexandria.repository.BookRepository;
import com.betrybe.alexandria.service.exception.BookDetailNotFoundException;
import com.betrybe.alexandria.service.exception.BookNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
  private final BookRepository bookRepository;
  private final BookDetailRepository bookDetailRepository;

  @Autowired
  public BookService(BookRepository bookRepository, BookDetailRepository bookDetailRepository) {
    this.bookRepository = bookRepository;
    this.bookDetailRepository = bookDetailRepository;
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

  public BookDetail createBookDetail(Long bookId, BookDetail bookDetail)
      throws BookNotFoundException {
    Book book = findById(bookId);

    bookDetail.setBook(book);
    return bookDetailRepository.save(bookDetail);
  }

  public BookDetail getBookDetail(Long bookId)
      throws BookNotFoundException, BookDetailNotFoundException {
    Book book = findById(bookId);

    BookDetail bookDetailFromDB = book.getDetails();

    if (bookDetailFromDB == null) {
      throw new BookDetailNotFoundException();
    }

    return bookDetailFromDB;
  }

  public BookDetail updateBookDetail(Long bookId, BookDetail updatedBookDetail)
      throws BookDetailNotFoundException, BookNotFoundException {
    BookDetail bookDetailFromDB = getBookDetail(bookId);

    bookDetailFromDB.setSummary(updatedBookDetail.getSummary());
    bookDetailFromDB.setPageCount(updatedBookDetail.getPageCount());
    bookDetailFromDB.setYear(updatedBookDetail.getYear());
    bookDetailFromDB.setIsbn(updatedBookDetail.getIsbn());

    return bookDetailRepository.save(bookDetailFromDB);
  }

  public BookDetail removeBookDetail(Long bookId)
      throws BookNotFoundException, BookDetailNotFoundException {
    Book book = findById(bookId);
    BookDetail bookDetail = book.getDetails();

    if (bookDetail == null) {
      throw new BookDetailNotFoundException();
    }

    book.setDetails(null);
    bookDetail.setBook(null);

    bookDetailRepository.delete(bookDetail);

    return bookDetail;
  }
}
