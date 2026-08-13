from Node import Node;
from SingleLinkedList import SingleLinkedList


class InsertAtIndexPostion(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def insertAtIndexPostion(self, data, index):
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            temp = self.head
            for i in range(0, index - 1):
                if temp is not None:
                    temp = temp.next
                else:
                    break
            if temp is not None:
                node.next = temp.next
                temp.next = node
            else:
                print("Index is out of range")


ll = InsertAtIndexPostion()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
ll.head = node1
node1.next = node2
node2.next = node3
ll.displayList()
ll.insertAtIndexPostion(25, 2)
ll.insertAtIndexPostion(35, 4)
ll.displayList()
ll.insertAtIndexPostion(40, 7)
ll.displayList()
