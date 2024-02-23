from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.__numbers = numbers

    def media(self):
        return sum(self.__numbers) / len(self.__numbers)

    def mediana(self):
        sorted_numbers = sorted(self.__numbers)
        index = len(sorted_numbers) // 2
        if len(sorted_numbers) % 2 == 0:
            return (sorted_numbers[index - 1] + sorted_numbers[index]) / 2

        return sorted_numbers[index]

    def moda(self):
        number, _ = Counter(self.__numbers).most_common()[0]
        return number
