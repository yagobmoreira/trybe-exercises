package exemplos;

import java.time.LocalDate;

public class AlertaAniversario {
  public void checkarAniversario() {
    LocalDate dataHoje = LocalDate.now();
    LocalDate nascimento = LocalDate.parse("1993-11-08");

    if (dataHoje.getMonth() == nascimento.getMonth()) {
      if (dataHoje.getDayOfMonth() == nascimento.getDayOfMonth()) {
        System.out.println("Hoje é seu aniversário!");
      } else if (dataHoje.getDayOfMonth() < nascimento.getDayOfMonth()) {
        System.out.println("Seu aniversário está próximo!");
      } else {
        System.out.println("Seu aniversário já passou");
      }
    } else {
      System.out.println("Não é seu aniversário!");
    }
  }
}
