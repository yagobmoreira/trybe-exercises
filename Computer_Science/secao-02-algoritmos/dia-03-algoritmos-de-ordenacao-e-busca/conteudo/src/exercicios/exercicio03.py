from .Cronometro import Cronometro

from ..selection_sort import selection_sort
from ..insertion_sort import insertion_sort
from random import shuffle


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (100, 100_0, 10_000):
        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]  # copia dos ordenados
        shuffle(random_numbers)  # embaralha eles

        with Cronometro(
            f"{algorithm_name} com entrada" + f"ordenada de {input} números"
        ):
            algorithm(sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada"
            + f"inversamente ordenada de {input} números"
        ):

            algorithm(reversed_sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada" + f"aleatória de {input} números"
        ):

            algorithm(random_numbers)

        print("*" * 50)
