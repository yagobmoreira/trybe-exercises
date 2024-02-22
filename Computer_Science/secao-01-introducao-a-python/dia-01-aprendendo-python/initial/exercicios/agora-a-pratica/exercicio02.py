def soma(list):
    result = 0
    for i in list:
        result += i
    return result


def media(list):
    return soma(list) / len(list)


print(media([1, 2, 3, 4, 5]))
