
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Testes da classe Calculadora")
public class CalculadoraTest {

  @Test
  @DisplayName("Teste do método somar")
  public void testSomar() {
    Calculadora cal = new Calculadora();
    assertEquals(34, cal.somar(32, 2));
  }

  @Test
  @DisplayName("Teste do método subtrair")
  public void testSubtrair() {
    Calculadora cal = new Calculadora();
    assertEquals(1, cal.subtrair(3,2));
  }

  @Test
  @DisplayName("Teste do método dividir")
  public void testDividir() {
    Calculadora cal = new Calculadora();
    assertEquals(10, cal.dividir(20, 2));
  }

  @Test
  @DisplayName("Teste da exceção do método dividir")
  public void testDividirExcecao() {
    Calculadora cal = new Calculadora();
    assertThrows(ArithmeticException.class, () -> {
      cal.dividir(20,0);
    });
  }
}
