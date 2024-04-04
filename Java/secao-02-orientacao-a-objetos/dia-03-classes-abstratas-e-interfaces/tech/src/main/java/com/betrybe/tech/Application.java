package com.betrybe.tech;

public class Application {

  public static void main(String[] args) {
    Laptop laptop = new Laptop("Samsung", 100, 17);
    Desktop desktop = new Desktop("Dell", 500);
    PowerBank powerbank = new PowerBank();

    checkDevice(laptop);
    checkDevice(desktop);

    plugDevice(laptop);
    plugDevice(powerbank);

    ComputerDevice genericDevice = new Laptop("Apple", 256.0, 13.3);

    if (genericDevice instanceof Laptop) {
      Laptop specifLaptop = (Laptop) genericDevice;
    }
  }

  public static void checkDevice(ComputerDevice device) {
    System.out.println("Verificando dispositivo de marca " + device.getBrand());
    device.bootUp();
  }

  public static void plugDevice(Chargeable chargeable) {
    System.out.println("A bateria atual é " + chargeable.getBatteryLevel());
    chargeable.charge();
  }
}
