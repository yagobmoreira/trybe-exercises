class Stack:
    def __init__(self) -> None:
        self._data = list()

    def __str__(self) -> str:
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return f"Stack({str_items})"

    def size(self) -> int:
        return len(self._data)

    def is_empty(self) -> bool:
        return not bool(self.size())

    def push(self, value) -> None:
        self._data.append(value)

    def pop(self) -> any:
        if self.is_empty():
            return None

        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self) -> any:
        if self.is_empty():
            return None

        top_value = self._data[-1]
        return top_value

    def clear(self):
        self._data.clear()


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack)
    print("size =", content_stack.size())
    print("top =", content_stack.peek())
    print("top-removed =", content_stack.pop())
    print(content_stack)
    print("size =", content_stack.size())

    print("---Clear stack---")
    content_stack.clear()
    print(content_stack)
    print("size =", content_stack.size())
