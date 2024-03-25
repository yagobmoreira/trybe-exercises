package com.betrybe.trybebank;

public class Banco {
    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria(1000);

        conta.mostrarMensagem();
        conta.depositar(500);
        double valorConvertido = conta.converteMoedas(30, 5);
        System.out.println(valorConvertido);
    }
}
