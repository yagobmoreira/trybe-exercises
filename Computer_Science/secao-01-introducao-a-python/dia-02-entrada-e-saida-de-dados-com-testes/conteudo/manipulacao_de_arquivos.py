with open("arquivo.txt", mode="w") as file:
    file.write("Nome idade\n")
    file.write("Maria 45\n")
    file.write("Miguel 33\n")
    print("Tulio 22", file=file)
    LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
    file.writelines(LINES)

file.close()
