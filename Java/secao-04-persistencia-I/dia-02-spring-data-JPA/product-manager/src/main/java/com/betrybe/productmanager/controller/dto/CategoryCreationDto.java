package com.betrybe.productmanager.controller.dto;

import com.betrybe.productmanager.entity.Category;

public record CategoryCreationDto(String name) {
  public Category toEntity() { return new Category(name); }
}
