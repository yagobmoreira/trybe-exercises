package exemplos;

import java.time.DayOfWeek;
import java.time.LocalDateTime;

public class Academia {
  public void verificarDiaAcademia() {
    LocalDateTime hoje = LocalDateTime.now();
    if (hoje.getDayOfWeek() == DayOfWeek.MONDAY) {
      System.out.println("Hoje é dia de academia");
    } else if (hoje.getDayOfWeek() == DayOfWeek.WEDNESDAY) {
      System.out.println("Hoje é dia de academia");
    } else if (hoje.getDayOfWeek() == DayOfWeek.FRIDAY) {
      System.out.println("Hoje é dia de academia");
    }
  }
}
