package com.betrybe.tech;

public abstract class QuantumComputer extends ComputerDevice {
  public QuantumComputer(String brand, int storageCapacity) {
    super(brand, storageCapacity);
  }

  public abstract void quantumComputation();
}
