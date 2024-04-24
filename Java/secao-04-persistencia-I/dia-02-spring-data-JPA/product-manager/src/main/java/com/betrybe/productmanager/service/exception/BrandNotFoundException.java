package com.betrybe.productmanager.service.exception;

public class BrandNotFoundException extends NotFoundException {

  public BrandNotFoundException() {
    super("Marca não encontrada!");
  }
}
