package com.betrybe.exercicios;

public class Carro {
  String marca;
  String modelo;
  int ano;
  public Carro(String marca, String modelo, int ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  public String info() {
    return "Marca: %s, Modelo: %s, Ano: %d".formatted(marca, modelo, ano);
  }
}
