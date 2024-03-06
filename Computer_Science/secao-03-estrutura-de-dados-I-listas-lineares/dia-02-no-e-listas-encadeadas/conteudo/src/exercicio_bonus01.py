from linked_list_content import LinkedList


def delete_duplicates(linked_list: LinkedList):
    list_with_unique_items = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_items.index_of(current_node.value) == -1:
            list_with_unique_items.insert_last(current_node.value)

    return list_with_unique_items


if __name__ == "__main__":
    new_linked_list = LinkedList()
    new_linked_list.insert_last(1)
    new_linked_list.insert_last(1)
    new_linked_list.insert_last(2)
    new_linked_list.insert_last(2)
    new_linked_list.insert_last(3)
    print(new_linked_list)

    linked_list_with_unique_elements = delete_duplicates(new_linked_list)
    print(linked_list_with_unique_elements)
