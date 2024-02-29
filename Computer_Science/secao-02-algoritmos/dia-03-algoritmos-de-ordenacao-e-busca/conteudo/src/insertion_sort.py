def insertion_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for index in range(1, n):  # Começaremos a ordenar pelo segundo elemento
        # Pegamos o segundo elemento e o definimos como chave
        key = numbers[index]

        # Tomamos a posição anterior para iniciar a comparação
        new_position = index - 1
        while (
            new_position >= 0 and numbers[new_position] > key
        ):  # Enquanto a chave for menor, remaneja o elemento para frente
            numbers[new_position + 1] = numbers[new_position]
            new_position = new_position - 1

        numbers[new_position + 1] = key  # Insere a chave na posição correta

    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(insertion_sort(numbers))
