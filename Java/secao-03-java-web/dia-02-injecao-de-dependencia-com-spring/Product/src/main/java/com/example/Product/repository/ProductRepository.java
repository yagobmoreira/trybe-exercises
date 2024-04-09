package com.example.Product.repository;

import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

  public String getMessage() {
    return "Mensagem: produto retornado.";
  }
}
