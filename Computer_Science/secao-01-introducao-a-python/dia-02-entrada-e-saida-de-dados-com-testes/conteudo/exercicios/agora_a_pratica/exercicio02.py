import random


def choose_word():
    words = [
        "abacaxi",
        "elefante",
        "montanha",
        "computador",
        "girassol",
        "avião",
        "biblioteca",
        "banana",
        "chocolate",
        "cachoeira",
    ]

    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))
    attempts = 1
    while attempts <= 3:
        print(f"Descubra que palavra é essa: {scrambled_word}")
        choosed_word = input("Digite a palavra: ")
        if choosed_word == word:
            print("Parabens você acertou!!")
            break
        else:
            if attempts == 3:
                print("Você perdeu")
                break
            print(f"Tentativas restantes {3 - attempts}")
            attempts += 1


choose_word()
