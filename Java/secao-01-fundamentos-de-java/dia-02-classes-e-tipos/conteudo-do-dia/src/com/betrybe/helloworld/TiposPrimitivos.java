package com.betrybe.helloworld;

public class TiposPrimitivos {
    public static void main(String[] args) {
        byte b = 9;
        System.out.println(b);

        short num = 300;
        short formatadaComUnderscore = 20_000;
        System.out.println(num);
        System.out.println(formatadaComUnderscore);

        int numeroInteiro = 10;
        int a = 10, c = 20, soma;
        soma = a + c;
        System.out.println(numeroInteiro);
        System.out.println(soma);

        long numA = 102040;
        long numB = 102030405060L; // adicionado L no final para indicar que estamos inserindo um valor do tipo long
        System.out.println(numA);
        System.out.println(numB);

        float floatNumA = -101.23f;
        float floatNumB = 2.356f;

        System.out.println(floatNumA + floatNumB);

        double valorUm = 0.5; // double inicializado naturalmente
        double valorDois = 0.5d; // double definido explicitamente
        double valorTres = 0.123456789;
        System.out.println(valorUm);
        System.out.println(valorDois);
        System.out.println(valorTres);

        boolean isBoolean = true;
        boolean ehNumero = false;

        char letraA = 'a';
        char letraAMaiuscula = 'A';
        System.out.println(letraA);
        System.out.println(letraAMaiuscula);
    }
}
