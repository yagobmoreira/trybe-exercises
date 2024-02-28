def count_even(n):
    count = 0
    if n <= 0:
        return 0
    else:
        if n % 2 == 0:
            count += 1
        return count + count_even(n - 1)


if __name__ == "__main__":
    print(count_even(53))
