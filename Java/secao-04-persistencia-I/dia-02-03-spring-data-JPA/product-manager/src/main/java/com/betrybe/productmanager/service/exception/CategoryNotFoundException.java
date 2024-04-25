package com.betrybe.productmanager.service.exception;

public class CategoryNotFoundException extends NotFoundException {

  public CategoryNotFoundException() {
    super("Categoria não encontrada!");
  }
}
