package com.betrybe.productmanager.controller.dto;

import com.betrybe.productmanager.entity.Brand;

public record BrandDto(Long id, String name) {
  public static BrandDto fromEntity(Brand brand) {
    return new BrandDto(
        brand.getId(),
        brand.getName()
    );
  }
}
