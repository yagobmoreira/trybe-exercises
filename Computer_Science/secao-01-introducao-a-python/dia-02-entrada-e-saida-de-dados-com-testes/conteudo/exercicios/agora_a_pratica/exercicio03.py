import random


def choose_word():
    with open("exercicios/agora_a_pratica/words.txt", mode="r") as palavras:
        words = [word.strip() for word in palavras]

    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))
    attempts = 1
    while attempts <= 3:
        print(f"Descubra que palavra é essa: {scrambled_word.lower()}")
        choosed_word = input("Digite a palavra: ")
        if choosed_word.lower() == word.lower():
            print("Parabens você acertou!!")
            break
        else:
            if attempts == 3:
                print("Você perdeu")
                break
            print(f"Tentativas restantes {3 - attempts}")
            attempts += 1


choose_word()
