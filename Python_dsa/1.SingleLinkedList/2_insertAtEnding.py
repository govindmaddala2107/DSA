from Node import Node;
from SingleLinkedList import SingleLinkedList


class InsertAtEnding(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def insertAtEnding(self, data):
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            temp.next = node


ll = InsertAtEnding()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
ll.head = node1
node1.next = node2
node2.next = node3
ll.displayList()
ll.insertAtEnding(40)
ll.displayList()
