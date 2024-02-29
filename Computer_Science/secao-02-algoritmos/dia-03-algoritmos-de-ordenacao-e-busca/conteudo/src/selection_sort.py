def selection_sort(numbers):
    n = len(numbers)  # Quantidade de elementos da lista

    for index in range(n - 1):  # Precisamos ordenar N-1 elementos
        min_element_index = index  # variável para buscar o menor elemento

        # Início da busca pelo menor elemento
        for search_index in range(index + 1, n):
            if numbers[search_index] < numbers[min_element_index]:
                min_element_index = (
                    search_index  # Atualiza o índice atual do menor elemento
                )

        # Troca os elementos de posição
        current_element = numbers[index]
        numbers[index] = numbers[min_element_index]
        numbers[min_element_index] = current_element

    return numbers


if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(f"Lista inicial: {numbers}")
    ordered_numbers = selection_sort(numbers)
    print(f"Lista final: {ordered_numbers}")
