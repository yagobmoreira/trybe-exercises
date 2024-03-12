def get_score(subordinates, employee):
    this_score = 1

    for subordinate in subordinates[employee]:
        this_score += get_score(subordinates, subordinate)

    return this_score


if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    print(get_score(subordinates, 1))
    print(get_score(subordinates, 2))
    print(get_score(subordinates, 3))
    print(get_score(subordinates, 4))
    print(get_score(subordinates, 5))
    print(get_score(subordinates, 6))
    print(get_score(subordinates, 7))
