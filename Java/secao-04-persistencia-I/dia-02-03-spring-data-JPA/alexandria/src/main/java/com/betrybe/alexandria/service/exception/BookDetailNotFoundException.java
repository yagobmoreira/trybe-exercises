package com.betrybe.alexandria.service.exception;

public class BookDetailNotFoundException extends NotFoundException {

  public BookDetailNotFoundException() {
    super("Detalhes do livro não encontrados!");
  }
}
