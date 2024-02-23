class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if 0 <= self.__volume < 99:
            self.__volume += 1
        else:
            print("Volume está no máximo")

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        elif self.__volume == 0:
            print("O volume está no mínimo")

    def modificar_canal(self, novo_canal):
        if novo_canal < 1 or novo_canal > 99:
            raise ValueError("Canal indisponível")

        self.__canal = novo_canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
