from linked_list import LinkedList


class Stack:
    def __init__(self):
        self._data = LinkedList()

    def __str__(self) -> str:
        str_items = ""
        for i in range(len(self._data)):
            value = self._data.get_element_at(i)
            str_items += str(value)
            if i + 1 < len(self._data):
                str_items += ", "

        return f"Queue({str_items})"

    def push(self, value):
        self._data.insert_last(value)

    def pop(self):
        if self._data.is_empty():
            return None

        return self._data.remove_last()

    def is_empty(self) -> bool:
        return not len(self._data)

    def peek(self):
        return self._data.get_element_at(len(self._data))

    def min_value(self):
        minimum = self.peek().value

        while not self.is_empty():
            top_value = self.pop().value
            if top_value < minimum:
                minimum = top_value

        return minimum


if __name__ == "__main__":
    content_stack = Stack()
    content_stack.push(1)
    content_stack.push(-2)
    content_stack.push(3)
    print(content_stack.min_value())  # saída: -2
