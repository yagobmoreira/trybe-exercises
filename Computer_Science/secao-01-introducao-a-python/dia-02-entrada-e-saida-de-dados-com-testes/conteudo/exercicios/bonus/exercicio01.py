import json
import random


def who_that_pokemon():
    index = 1
    with open("pokemons.json", "r") as file:
        pokemons_data = json.load(file)
        pokemons = pokemons_data["results"]

        random_pokemon = random.choice(pokemons)
        pokemon_name = random_pokemon["name"]
    while index < len(pokemon_name):
        input_data = input("Who's that pokemon ? ")

        if input_data.lower() == pokemon_name.lower():
            print(f"Você acertou ! O pokemon era {pokemon_name}")
            break
        else:
            print("Você errou, tente novamente !")
            print(f"pokemon: {pokemon_name[:index]}")
            index += 1


who_that_pokemon()
