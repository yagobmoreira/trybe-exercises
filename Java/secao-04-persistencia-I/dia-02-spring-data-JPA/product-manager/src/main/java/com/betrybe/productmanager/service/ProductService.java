package com.betrybe.productmanager.service;

import com.betrybe.productmanager.entity.Product;
import com.betrybe.productmanager.repository.ProductRepository;
import com.betrybe.productmanager.service.exception.ProductNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
  private final ProductRepository productRepository;

  @Autowired
  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public Product findById(Long id) throws ProductNotFoundException {
    return productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
  }

  public List<Product> findAll() {
    return productRepository.findAll();
  }

  public Product create(Product newProduct) {
    return productRepository.save(newProduct);
  }

  public Product update(Long id, Product updatedProduct) throws ProductNotFoundException {
    Product productFromDB = findById(id);

    productFromDB.setName(updatedProduct.getName());
    productFromDB.setPrice(updatedProduct.getPrice());

    return productRepository.save(productFromDB);
  }

  public Product delete(Long id) throws ProductNotFoundException {
    Product productFromDB = findById(id);

    productRepository.delete(productFromDB);

    return productFromDB;
  }
}
