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
  int MAX_VOLUME = 30;
  int volume = 0;

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

  public void turnOn() {
    System.out.println("Ligando televisão...");
    this.isOn = true;
  }

  public void turnOff() {
    System.out.println("Desligando televisão...");
    this.isOn = false;
  }

  public String info() {
    return "Marca: %s, Modelo: %s, Tamanho: %d, Ligada: %b".formatted(brand, model, size, isOn);
  }

  public void increaseVolume() {
    if (volume < MAX_VOLUME) {
      volume++;
    }
  }

  public void decreaseVolume() {
    if (volume > 0) {
      volume--;
    }
  }
}
