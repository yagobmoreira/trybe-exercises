package com.betrybe.productmanager.controller.dto;

import com.betrybe.productmanager.entity.Product;

public record ProductDto(Long id, String name, Double price) {
  public static ProductDto fromEntity(Product product) {
    return new ProductDto(
        product.getId(),
        product.getName(),
        product.getPrice()
    );
  }
}
