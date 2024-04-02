package com.betrybe.electronic;

/**
 * The type Application.
 */
public class Application {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {
    System.out.println("Iniciando o sistema...");

    Television television = new Television("Phillips", "Smart TV", 55);

    System.out.println("Finalizando o sistema...");
  }
}