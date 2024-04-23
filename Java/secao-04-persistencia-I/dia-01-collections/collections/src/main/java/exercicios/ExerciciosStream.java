package exercicios;

import java.util.List;

public class ExerciciosStream {

  public static void main(String[] args) {
    List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    List<Integer> numerosPares = filtrarNumerosPares(numeros);

    System.out.printf(numerosPares.toString());
  }

  public static List<Integer> filtrarNumerosPares (List<Integer> numeros) {
    return numeros.stream().filter(numero -> numero % 2 == 0).toList();
  }
}
