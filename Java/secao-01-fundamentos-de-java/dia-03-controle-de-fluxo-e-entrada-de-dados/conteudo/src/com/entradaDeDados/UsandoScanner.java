package com.entradaDeDados;

import java.util.Scanner;

public class UsandoScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Qual o seu nome: ");
        String nome = scanner.next();
        System.out.println("Boas-vindas, " + nome + "!");
        scanner.close();
    }
}
