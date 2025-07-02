from doubleNode import DoubleNode
from DoubleLinkedList import DoubleLinkedList


class InsertAtBeginning(DoubleLinkedList):
    def __init__(self):
        super().__init__()

    def insertAtBeginning(self, data):
        node = DoubleNode(data)
        self.head.prev = node
        node.next = self.head
        self.head = node


dll = InsertAtBeginning()
dll.display()

dNode_a = DoubleNode(40)
dNode_b = DoubleNode(50)
dNode_c = DoubleNode(60)

dNode_a.next = dNode_b

dNode_b.next = dNode_c
dNode_b.prev = dNode_a

dNode_c.prev = dNode_b

dll.head = dNode_a

dll.insertAtBeginning(30)
dll.insertAtBeginning(20)
dll.insertAtBeginning(10)
dll.display()

