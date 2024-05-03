import exemplos.Academia;
import exemplos.AlertaAniversario;
import exemplos.HoraRefeicao;
import exemplos.IdadeEmDias;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Application {

  public static void main(String[] args) {
    Academia agenda = new Academia();
    agenda.verificarDiaAcademia();

    LocalDateTime dateTime = LocalDateTime.of(2023, 7, 11, 10, 30, 5); // 2023-07-11T10:30:00
    int year = dateTime.getYear();
    int month = dateTime.getMonth().getValue();
    int dayOfMonth = dateTime.getDayOfMonth();
    int hour = dateTime.getHour();
    int minute = dateTime.getMinute();
    int second = dateTime.getSecond();

    System.out.printf("%d-%d-%dT%d:%d:%d\n", year, month, dayOfMonth, hour, minute, second);
//    LocalDateTime newDateTime = dateTime.plusYears(1); // 2024-07-11T10:30:00
    LocalDateTime newDateTime = dateTime.minusMonths(2); // 2023-05-11T10:30:00
    System.out.println(newDateTime);

    LocalDateTime dateTime1 = LocalDateTime.of(2023, 7, 11, 10, 30, 0); // 2023-07-11T10:30:00
    LocalDateTime dateTime2 = LocalDateTime.of(2022, 10, 21, 10, 30, 0); // 2022-10-21T10:30:00
    boolean isBefore = dateTime1.isBefore(dateTime2); // dateTime1 é anterior a dateTime2? false
    boolean isAfter = dateTime1.isAfter(dateTime2); // dateTime1 é posterior a dateTime2? true
    boolean isEqual = dateTime1.isEqual(dateTime2); // dateTime1 é igual a dateTime2? false

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
    String formattedDateTime = dateTime.format(formatter); // 11/07/2023 10:30:00
    System.out.println(formattedDateTime);

    HoraRefeicao horaRefeicao = new HoraRefeicao();
    horaRefeicao.calcularHoraRefeicao();

    IdadeEmDias idade = new IdadeEmDias();
    System.out.println("A quantidade de dias desde o seu nascimento é: " + idade.calcularIdadeEmDias("1993-11-08T12:45:00"));

    AlertaAniversario alerta = new AlertaAniversario();
    alerta.checkarAniversario();
  }
}
