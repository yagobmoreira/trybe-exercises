package com.betrybe.productmanager.service;

import com.betrybe.productmanager.entity.Category;
import com.betrybe.productmanager.repository.CategoryRepository;
import com.betrybe.productmanager.service.exception.CategoryNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
  private final CategoryRepository categoryRepository;

  @Autowired
  public CategoryService(CategoryRepository categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  public Category findById(Long id) throws CategoryNotFoundException {
    return categoryRepository.findById(id).orElseThrow(CategoryNotFoundException::new);
  }

  public List<Category> findAll() {
    return categoryRepository.findAll();
  }

  public Category create(Category newCategory) {
    return categoryRepository.save(newCategory);
  }

  public Category update(Long id, Category updatedCategory) throws CategoryNotFoundException {
    Category categoryFromDB = findById(id);

    categoryFromDB.setName(updatedCategory.getName());

    return categoryRepository.save(categoryFromDB);
  }

  public Category delete(Long id) throws CategoryNotFoundException {
    Category categoryFromDB = findById(id);

    categoryRepository.delete(categoryFromDB);

    return categoryFromDB;
  }
}
