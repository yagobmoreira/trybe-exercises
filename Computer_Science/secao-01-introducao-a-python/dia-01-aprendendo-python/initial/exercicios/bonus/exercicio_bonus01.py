def menor_numero(lista):
    menor = lista[0]
    for numero in lista:
        if numero < menor:
            menor = numero
    return menor


print(menor_numero([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
