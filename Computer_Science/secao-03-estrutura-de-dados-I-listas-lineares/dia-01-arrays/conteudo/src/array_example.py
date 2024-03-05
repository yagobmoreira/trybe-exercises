import sys


class ListaArray:
    def __init__(self) -> None:
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value


if __name__ == "__main__":
    # vamos inicializar e preencher uma estrutura de dados array
    array = ListaArray()

    array_memory_size = sys.getsizeof(array.data)
    print("Tamanho inicial:", array_memory_size)

    array.set(0, "Felipe")
    array.set(1, "Ana")
    array.set(2, "Shirley")
    array.set(3, "Miguel")

    array_memory_size = sys.getsizeof(array.data)
    print("Tamanho após inserção de itens:", array_memory_size)

    # para acessar um elemento do array, utilizamos seu índice
    print(array.get(0))  # saída: Felipe
    print(array.get(2))  # saída: Shirley
    print("-----")

    array.remove(0)
    print(array)

    array.update(0, "Joaquin")
    print(array)

    # podemos iterar sobre seus elementos da seguinte maneira
    index = 0

    # enquanto há elementos no array
    while index < len(array):
        # recupera o elemento através de um índice
        print("Index:", index, ", Nome:", array.get(index))

        index += 1
