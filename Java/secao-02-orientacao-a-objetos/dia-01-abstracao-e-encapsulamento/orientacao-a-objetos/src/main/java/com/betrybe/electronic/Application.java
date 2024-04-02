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

    System.out.println("A televisão está ligada ?");
    System.out.println(television.isOn());

    System.out.println("O volume atual é: ");
    System.out.println(television.getVolume());

    System.out.println("Modelo antigo:");
    System.out.println(television.getModel());

    television.setModel("LCD-Ultra");

    System.out.println("Modelo novo:");
    System.out.println(television.getModel());

    double sizeCm = Television.convertToCentimeters(55);
    System.out.println("O tamanho em centímetros é: "  + sizeCm);

    System.out.println("Finalizando o sistema...");
  }
}