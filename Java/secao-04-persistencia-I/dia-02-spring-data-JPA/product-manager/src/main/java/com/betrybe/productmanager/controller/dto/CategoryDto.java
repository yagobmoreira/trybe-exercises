package com.betrybe.productmanager.controller.dto;

import com.betrybe.productmanager.entity.Category;

public record CategoryDto(Long id, String name) {
  public static CategoryDto fromEntity(Category category) {
    return new CategoryDto(
        category.getId(),
        category.getName()
    );
  }
}
