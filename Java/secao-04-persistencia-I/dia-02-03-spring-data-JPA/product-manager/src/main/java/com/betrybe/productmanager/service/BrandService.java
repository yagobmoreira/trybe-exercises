package com.betrybe.productmanager.service;

import com.betrybe.productmanager.entity.Brand;
import com.betrybe.productmanager.repository.BrandRepository;
import com.betrybe.productmanager.service.exception.BrandNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandService {
  private final BrandRepository brandRespository;

  @Autowired
  public BrandService(BrandRepository brandRespository) {
    this.brandRespository = brandRespository;
  }

  public Brand findById(Long id) throws BrandNotFoundException {
    return brandRespository.findById(id).orElseThrow(BrandNotFoundException::new);
  }

  public List<Brand> findAll() {
    return brandRespository.findAll();
  }

  public Brand create(Brand newBrand) {
    return brandRespository.save(newBrand);
  }

  public Brand update(Long id, Brand updatedBrand) throws BrandNotFoundException {
    Brand brandFromDB = findById(id);

    brandFromDB.setName(updatedBrand.getName());

    return brandRespository.save(brandFromDB);
  }

  public Brand delete(Long id) throws BrandNotFoundException {
    Brand brandFromDB = findById(id);

    brandRespository.delete(brandFromDB);

    return brandFromDB;
  }
}
