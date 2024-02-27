def fizzbuzz(n: int):
    result = []
    for n in range(1, n + 1):
        if n % 15 == 0:
            result.append("FizzBuzz")
        elif n % 3 == 0:
            result.append("Fizz")
        elif n % 5 == 0:
            result.append("Buzz")
        else:
            result.append(n)
    return result


print(fizzbuzz(15))
