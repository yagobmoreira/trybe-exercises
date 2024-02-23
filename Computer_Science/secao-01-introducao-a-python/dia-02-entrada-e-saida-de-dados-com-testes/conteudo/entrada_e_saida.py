def nome_na_vertical(name: str):
    for character in name:
        print(character.upper())


def add_natural_numbers(numbers: str):
    sum = 0
    numbers = input("Digite os números naturais separados por espaço: ")
    numbersList = numbers.split(" ")
    for number in numbersList:
        if not number.isdigit():
            print(f"Erro ao somar valores, {number} não é um dígito.")
        else:
            sum += int(number)
    print(f"A soma dos valores é {sum}")


add_natural_numbers("1 2 3 4")
