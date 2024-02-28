def list_maximum_aux(list, tamanho):
    if tamanho == 1:
        return list[0]
    else:
        maior = list_maximum_aux(list, tamanho - 1)
        if maior > list[tamanho - 1]:
            return maior
        else:
            maior = list[tamanho - 1]


def list_maximum(list):
    length = len(list)
    return list_maximum_aux(list, length)


if __name__ == "__main__":
    print(list_maximum([100, 20, 2, 3, 5]))
