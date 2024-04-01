package com.entradaDeDados;

import java.util.Scanner;

public class UsandoScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Qual o seu nome: ");
        String nome = scanner.next();
        System.out.print("Entre com o primeiro número: ");
        String input1 = scanner.next();
        System.out.print("Entre com o seguindo número: ");
        String input2 = scanner.next();
        System.out.print("Entre com o número: ");

        String input = scanner.next();
        short numeroInteiroPequeno = Short.parseShort(input); // Converte para short.
        long numeroInteiroBemGrande = Long.parseLong(input); // Converte para long.
        float numeroDePontoFlutuante = Float.parseFloat(input); // Converte para float.
        double numeroDePontoFlutuanteComPrecisaoDupla = Double.parseDouble(input); // Converte para double.

        int n1 = Integer.parseInt(input1);
        int n2 = Integer.parseInt(input2);
        int resultado = n1 + n2;
        System.out.println("Boas-vindas, " + nome + "!");
        System.out.println("O resultado da soma é: " + resultado);

        scanner.close();
    }
}
