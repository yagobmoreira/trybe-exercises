package com.example.Product.service;

import com.example.Product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductService {
  private ProductRepository productRepository;

  @Autowired
  public ProductService(ProductRepository productRepository){
    this.productRepository = productRepository;
  }
}
