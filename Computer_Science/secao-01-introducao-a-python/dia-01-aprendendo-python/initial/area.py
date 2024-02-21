PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    """Calculate area of square."""
    return side * side


def rectangle(length, width):
    """Calculate area of rectangle."""
    return length * width


def circle(radius):
    """Calculate area of circle."""
    return PI * radius * radius


print("Area do quadrado:", square(10))
print("Area do retângulo:", rectangle(2, 2))
print("Area do círculo:", circle(3))
