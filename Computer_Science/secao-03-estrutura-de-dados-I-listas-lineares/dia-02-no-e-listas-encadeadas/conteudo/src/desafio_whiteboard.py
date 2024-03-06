def solucao(numbers: list[int], target: int):
    numbers.sort()

    first_index = 0
    last_index = len(numbers) - 1

    while first_index < last_index:
        if numbers[first_index] + numbers[last_index] == target:
            return True
        elif numbers[first_index] + numbers[last_index] < target:
            first_index += 1
        else:
            last_index -= 1

    return False


print(solucao([-1, 1, 2, 1, 3, 78, 4, 90], 7))


def test_solucao():
    assert solucao([-1, 1, 2, 1, 3, 78, 4, 90], 7) is True
    assert solucao([2, 2], 4) is True
    assert solucao([2, 2, 2, 2, 2, 2, 2], 5) is False
    assert solucao([1, 8, 13, 2, 5, 21], 3) is True
    assert solucao([13, 5, 8, 1, 2, 21, 21], 22) is True
    assert solucao([4, 3], 8) is False
    assert solucao([1, 4, 1, 2, 4], 7) is False
    assert solucao([2, 3, 1, 4], 9) is False
    assert solucao([1, 300, 20, 4000], 0) is False
