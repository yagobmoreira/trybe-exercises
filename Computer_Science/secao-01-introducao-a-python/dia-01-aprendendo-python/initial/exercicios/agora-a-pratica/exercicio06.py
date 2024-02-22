def triangle(A, B, C):
    isTriangle = A + B > C and A + C > B and B + C > A
    if not isTriangle:
        return "Não é um triângulo"
    if A == B and B == C:
        return "Equilátero"
    elif A == B or B == C or A == C:
        return "Isósceles"
    else:
        return "Escaleno"


print(triangle(2, 2, 3))
