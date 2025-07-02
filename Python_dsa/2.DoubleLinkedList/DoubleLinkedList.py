class DoubleLinkedList:
    def __init__(self):
        self.head = None

    def display(self):
        if self.head is None:
            print("List is empty")
        else:
            temp = self.head
            while temp is not None:
                print(temp.data, end=" --> ")
                temp = temp.next
            print("None")
