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

    }
}
