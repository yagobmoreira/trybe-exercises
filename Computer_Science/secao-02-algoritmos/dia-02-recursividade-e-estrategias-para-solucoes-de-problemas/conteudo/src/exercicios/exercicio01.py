def count_even(n):
    count = 0
    for index in range(1, n + 1):
        if index % 2 == 0:
            count += 1
    return count


if __name__ == "__main__":
    print(count_even(10))
