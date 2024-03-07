from linked_list import LinkedList


class Queue:
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

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self):
        if self._data.is_empty():
            return None

        return self._data.remove_first()

    def is_empty(self) -> bool:
        return not len(self._data)

    def peek(self):
        return self._data.get_element_at(0)
