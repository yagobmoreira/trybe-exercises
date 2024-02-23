from abc import ABC, abstractmethod
import math


class FiguraGeometrica(ABC):
    @abstractmethod
    def area():
        pass

    @abstractmethod
    def perimetro():
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        super().__init__()
        self.__lado = lado

    def area(self):
        return self.__lado**2

    def perimetro(self):
        return self.__lado + self.__lado


class Retangulo(FiguraGeometrica):
    def __init__(self, lado, altura):
        super().__init__()
        self.__lado = lado
        self.__altura = altura

    def area(self):
        return self.__lado * self.__altura

    def perimetro(self):
        return self.__lado + self.__altura


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        super().__init__()
        self.__raio = raio

    def area(self):
        return math.pi * (self.__raio**2)

    def perimetro(self):
        return 2 * math.pi * self.__raio
