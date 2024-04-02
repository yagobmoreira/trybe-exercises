package com.betrybe.exercicios;

public class Exercises {

  public static void main(String[] args) {
    Carro carro = new Carro("Hyundai", "HB20", 2022);
    System.out.println(carro.info());
    System.out.println(Carro.quantidadeDeCarros());
    Carro novoCarro = new Carro("Fiat", "UNO", 2012);
    System.out.println(Carro.quantidadeDeCarros());

  }
}
