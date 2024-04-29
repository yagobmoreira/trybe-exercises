package com.betrybe.productmanager.controller.dto;

import com.betrybe.productmanager.entity.Product;

public record ProductCreationDto(String name, Double price) {
  public Product toEntity() {
    return new Product(name, price);
  }
}
