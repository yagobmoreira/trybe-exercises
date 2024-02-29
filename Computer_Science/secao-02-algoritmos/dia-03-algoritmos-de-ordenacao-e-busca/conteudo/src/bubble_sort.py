def bubble_sort(numbers: list[int]):
    n = len(numbers)  # tamanho da lista

    for ordered_elements in range(n - 1):  # ordenar n-1 elements
        # Vamos percorrer até o elemento anterior ao ordenado
        for item in range(0, n - 1 - ordered_elements):
            if numbers[item] > numbers[item + 1]:
                current_element = numbers[item]
                numbers[item] = numbers[item + 1]
                numbers[item + 1] = current_element

    return numbers


if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(f"Lista inicial: {numbers}")
    ordered_numbers = bubble_sort(numbers)
    print(f"Lista final: {ordered_numbers}")
