package com.controleDeFluxo;

public class EstruturaWhile {
    public static void main(String[] args) {
        String[] inscritos = { "MARCOS", "ALINE", "LUCAS", "PATRICIA", "JOAO", "FELIPE", "LUCIA", "ANTONIO",
                "FERNANDA", "MARCELA", "VITOR", "BEATRIZ", "JORGE", "JULIA" };

        final int numeroVagas = 10;
        String[] vagas = new String[numeroVagas];
        int vagaAtual = 0;

        String inscrito;
        String log;

        while (vagaAtual < numeroVagas) {
            inscrito = inscritos[vagaAtual];
            log = "Adicionando a inscrição: " + inscrito + " Na vaga: " + (vagaAtual + 1);
            vagas[vagaAtual] = inscrito;
            vagaAtual += 1;
            System.out.println(log);
        }

    }
}
