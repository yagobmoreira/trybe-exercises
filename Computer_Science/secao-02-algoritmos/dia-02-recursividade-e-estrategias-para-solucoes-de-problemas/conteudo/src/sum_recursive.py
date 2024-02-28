def sum_recursive(n: int) -> int:
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum_recursive(n - 1)
