def bigger_name(names):
    result = ""
    for name in names:
        if len(name) > len(result):
            result = name
    return result


print(bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
