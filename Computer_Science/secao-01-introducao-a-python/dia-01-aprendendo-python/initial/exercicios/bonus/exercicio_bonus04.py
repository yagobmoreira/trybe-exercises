def generate_bill(litros, tipo_de_combustivel):
    if tipo_de_combustivel == "A":
        preco = 1.9
        desconto = 0.03
        if litros > 20:
            desconto = 0.05
    elif tipo_de_combustivel == "G":
        preco = 2.5
        desconto = 0.04
        if litros > 20:
            desconto = 0.06
    total = litros * preco
    total -= total * desconto
    return total


print(generate_bill(30, "A"))
