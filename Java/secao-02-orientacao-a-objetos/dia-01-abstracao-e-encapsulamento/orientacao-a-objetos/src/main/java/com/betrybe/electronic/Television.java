package com.betrybe.electronic;

/**
 * The type Television.
 */
public class Television {

  /**
   * The Is on.
   */
  boolean isOn = false;
  String brand;
  /**
   * The Model.
   */
  String model;
  /**
   * The Size.
   */
  int size;

  /**
   * Instantiates a new Television.
   *
   * @param brand the brand
   * @param model the model
   * @param size  the size
   */
  public Television(String brand, String model, int size) {
    this.brand = brand;
    this.model = model;
    this.size = size;
    System.out.println("Construtor da classe Television sendo executado...");
  }
}
