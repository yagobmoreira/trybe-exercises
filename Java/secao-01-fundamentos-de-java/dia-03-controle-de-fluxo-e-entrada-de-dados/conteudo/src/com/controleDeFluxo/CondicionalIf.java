package com.controleDeFluxo;

public class CondicionalIf {
    public static void main(String[] args) {
        double mediaFinal = 6.0;
        String resultado = "Indefinido";

        if (mediaFinal >= 7) {
            resultado = "Aprovado";
        } else if (mediaFinal >= 6.0) {
            resultado = "Realizar prova bônus";
        } else {
            resultado = "Reprovado";
        }
        System.out.println(resultado);
    }
}
