package com.controleDeFluxo;

public class EstruturaFor {
    public static void main(String[] args) {
        int numero;
        String log;

        for (numero = 1; numero <= 10 ; numero += 1) {
            log = "O número atual é: " + numero;
            System.out.println(log);
        }

        String[] alunos = {"MARCOS", "ALINE", "LUCAS", "PATRICIA"};
        int totalDeAlunos = alunos.length;

        log = "A lista de chamadas possui " + totalDeAlunos + " alunos";

        int matricula;
        for (int posicao = 0; posicao < totalDeAlunos; posicao += 1) {
            matricula = posicao + 1;
            log = "Matricula: " + matricula + " Aluno: " + alunos[posicao];
            System.out.println(log);
        }

        for (String aluno: alunos) {
            System.out.println(aluno);
        }
    }
}
