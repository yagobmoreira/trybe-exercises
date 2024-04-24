package com.betrybe.productmanager.controller;

import com.betrybe.productmanager.controller.dto.CategoryCreationDto;
import com.betrybe.productmanager.controller.dto.CategoryDto;
import com.betrybe.productmanager.entity.Category;
import com.betrybe.productmanager.service.CategoryService;
import com.betrybe.productmanager.service.exception.CategoryNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {
  private final CategoryService categoryService;

  @Autowired
  public CategoryController(CategoryService productService) {
    this.categoryService = productService;
  }

  @GetMapping("/{id}")
  public CategoryDto getCategoryById(@PathVariable Long id) throws CategoryNotFoundException {
    return CategoryDto.fromEntity(
        categoryService.findById(id)
    );
  }

  @GetMapping
  public List<CategoryDto> getAllCategories() {
    List<Category> allCategories = categoryService.findAll();
    return allCategories.stream()
        .map(CategoryDto::fromEntity)
        .toList();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public CategoryDto createCategory(@RequestBody CategoryCreationDto categoryCreationDto) {
    return CategoryDto.fromEntity(
        categoryService.create(categoryCreationDto.toEntity())
    );
  }

  @PutMapping("/{id}")
  public CategoryDto updateCategory(@PathVariable Long id,
      @RequestBody CategoryCreationDto categoryCreationDto) throws CategoryNotFoundException {
    return CategoryDto.fromEntity(
        categoryService.update(id, categoryCreationDto.toEntity())
    );
  }

  @DeleteMapping("/{id}")
  public CategoryDto deleteCategory(@PathVariable Long id) throws CategoryNotFoundException {
    return CategoryDto.fromEntity(
        categoryService.delete(id)
    );
  }
}
