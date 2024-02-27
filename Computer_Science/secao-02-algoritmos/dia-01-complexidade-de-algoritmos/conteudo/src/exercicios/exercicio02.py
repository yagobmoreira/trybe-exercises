import random


def random_average(n):
    list_of_averages = []

    for _ in range(100):
        sum = 0
        for _ in range(n):  # O(n)
            sum += random.randrange(1, n)
        average = sum / n
        list_of_averages.append(average)

    return list_of_averages
