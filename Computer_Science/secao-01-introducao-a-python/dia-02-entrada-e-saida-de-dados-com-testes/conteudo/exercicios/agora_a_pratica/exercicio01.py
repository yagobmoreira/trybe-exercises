def print_name(name: str):
    count = len(name)
    while count > 0:
        print(name[:count])
        count -= 1


print_name("yago")
