class Node:
    def __init__(self, value):
        self.value = value  # Dado a ser armazenado
        self.next = None  # Ponteiro para outro nó

    def __str__(self) -> str:
        return f"Node(value={self.value}, next={self.next})"
