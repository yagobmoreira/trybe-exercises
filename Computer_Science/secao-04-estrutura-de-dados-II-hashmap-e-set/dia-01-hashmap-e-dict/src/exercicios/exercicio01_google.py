class Hierarchy:
    def __init__(self, k) -> None:
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def add_employee(self, boss, employee):
        if not boss:
            self.subordinates[employee] = []
            self.scores[employee] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(employee)
            self.subordinates[employee] = []
            self.scores[employee] = 1
        else:
            self.add_employee(self.subordinates[boss][0], employee)

        current_boss = boss

        while current_boss:
            self.scores[current_boss] += 1
            current_boss = self.find_new_boss(current_boss, employee)

    def find_new_boss(self, boss, employee):
        if len(self.subordinates[boss]) < self.k:
            return boss
        else:
            return self.find_new_boss(self.subordinates[boss][0], employee)

    def get_score(self, employee):
        return self.scores[employee]


if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.add_employee(None, 1)
    hierarchy.add_employee(1, 2)
    hierarchy.add_employee(1, 3)
    hierarchy.add_employee(2, 4)
    hierarchy.add_employee(4, 5)
    hierarchy.add_employee(4, 6)
    hierarchy.add_employee(5, 7)

    print("\nAntes das novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}")
    hierarchy.add_employee(4, 8)
    hierarchy.add_employee(4, 9)

    print("\nApós novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}\n")
