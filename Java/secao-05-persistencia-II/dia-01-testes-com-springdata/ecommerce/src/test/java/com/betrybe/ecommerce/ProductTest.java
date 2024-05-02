package com.betrybe.ecommerce;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class ProductTest {
  @Autowired
  ProductRepository productRepository;

  @Test
  public void testProductCreation() {
    Product product = new Product();
    product.setName("Panela");
    product.setPrice(60.35);

    Product savedProduct = productRepository.save(product);

    assertNotNull(savedProduct.getId());
    assertEquals(product.getName(), savedProduct.getName());
    assertEquals(product.getPrice(), savedProduct.getPrice());
  }
}
