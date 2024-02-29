from .Cronometro import Cronometro
from ..algoritmos_dividir_e_conquistar.merge_sort import merge_sort
from ..bubble_sort import bubble_sort
from random import shuffle

for algorithm in (merge_sort, bubble_sort):
    algorithm_name = algorithm.__name__

    for input in (1_000, 10_000):
        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]  # copia dos ordenados
        shuffle(random_numbers)  # embaralha eles

        with Cronometro(
            f"{algorithm_name} com entrada" + f"aleatória de {input} números"
        ):
            algorithm(random_numbers)

    print("*" * 50)
