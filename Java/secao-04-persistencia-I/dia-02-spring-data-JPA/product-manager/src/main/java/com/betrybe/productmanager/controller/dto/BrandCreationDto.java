package com.betrybe.productmanager.controller.dto;

import com.betrybe.productmanager.entity.Brand;

public record BrandCreationDto(String name) {
  public Brand toEntity() {
    return new Brand(name);
  }
}
