class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self._preco = preco
        self._cor = cor
        self._tensao = tensao
        self._potencia = potencia
        self._ligado = False
        self._velocidade = 0
        self._velocidada_maxima = 3

    @property
    def preco(self):
        return self._preco

    @preco.setter
    def preco(self, novo_preco):
        self._preco = novo_preco

    @property
    def cor(self):
        return self._cor

    @cor.setter
    def cor(self, nova_cor):
        self._cor = nova_cor

    @property
    def tensao(self):
        return self._tensao

    @tensao.setter
    def tensao(self, nova_tensao):
        self._tensao = nova_tensao

    @property
    def potencia(self):
        return self._potencia

    @potencia.setter
    def potencia(self, nova_potencia):
        self._potencia = nova_potencia

    def ligar(self, velocidade):
        if velocidade > self._velocidada_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self._velocidade_maxima}"
            )

        self._velocidade = velocidade
        self._ligado = True

    def desligar(self):
        self._ligado = False
        self._velocidade = 0

    def esta_ligado(self):
        return self._ligado

    def __str__(self) -> str:
        return f"""
        - Cor do ventilador: {self.cor}
        - Potência do ventilador: {self.potencia}
        - Tensão do ventilador: {self.tensao}
        - Preço do ventilador: {self.preco}"""


ventilador_azul = Ventilador("Azul", 1500, 220, 300)
ventilador_azul.preco = 1500


class Pessoa:
    def __init__(self, nome, saldo_da_conta):
        self.nome = nome
        self.saldo_da_conta = saldo_da_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco > self.saldo_da_conta:
            print("Saldo insuficente!")
        else:
            self.saldo_da_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        return f"{self.nome} possui {self.saldo_na_conta} reais em sua conta."


nova_pessoa = Pessoa("Joaquin", 2000)
nova_pessoa.comprar_ventilador(ventilador_azul)
print(nova_pessoa.saldo_da_conta)
