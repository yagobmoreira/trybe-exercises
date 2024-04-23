package exercicios;

import java.util.List;

public class ExerciciosStream {

  public static void main(String[] args) {
    List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    List<Integer> numerosPares = filtrarNumerosPares(numeros);

    System.out.printf(numerosPares.toString());

    List<String> palavras = List.of("java", "stream", "programação", "backend");
    List<String> palavrasEmCaixaAlta = converterParaCaixaAlta(palavras);

    System.out.printf(palavrasEmCaixaAlta.toString());

    int soma = somaNumeros(numeros);
    System.out.printf(Integer.toString(soma));
  }

  public static List<Integer> filtrarNumerosPares(List<Integer> numeros) {
    return numeros.stream().filter(numero -> numero % 2 == 0).toList();
  }

  public static List<String> converterParaCaixaAlta(List<String> palavras) {
    return palavras.stream().map(String::toUpperCase).toList();
  }

  public static int somaNumeros(List<Integer> numeros) {
    return numeros.stream().mapToInt(Integer::intValue).sum();
  }
}
