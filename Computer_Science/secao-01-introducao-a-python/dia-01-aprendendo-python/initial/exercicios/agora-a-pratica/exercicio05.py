def custo_tinta(area):
    preco_lata = 80
    litros_necessarios = area / 3
    latas_necessarias = litros_necessarios // 18
    if litros_necessarios % 18 != 0:
        latas_necessarias += 1
    return latas_necessarias, latas_necessarias * preco_lata


print(custo_tinta(100))
