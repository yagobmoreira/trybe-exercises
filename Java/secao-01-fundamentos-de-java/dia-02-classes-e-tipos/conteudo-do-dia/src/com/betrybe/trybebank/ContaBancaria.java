package com.betrybe.trybebank;

public class ContaBancaria {
    double saldo;

    public ContaBancaria(double saldo) { //Constructor
        this.saldo = saldo;
    }

    void mostrarMensagem() {
        System.out.println("Conta bancária acessada.");
    }

    void depositar(double valor) {
        this.saldo += valor;
    }

    double converteMoedas(float total, float cambio) {
        return total*cambio;
    }
}
