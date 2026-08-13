from doubleNode import DoubleNode
from DoubleLinkedList import DoubleLinkedList


class InsertAtEnding(DoubleLinkedList):
    def __init__(self):
        super().__init__()

    def insertAtEnding(self, data):
        node = DoubleNode(data)
        temp = self.head
        while temp.next is not None:
            temp = temp.next
        temp.next = node
        node.prev = temp


dll = InsertAtEnding()
dll.display()

dNode_a = DoubleNode(10)
dNode_b = DoubleNode(20)
dNode_c = DoubleNode(30)

dNode_a.next = dNode_b

dNode_b.next = dNode_c
dNode_b.prev = dNode_a

dNode_c.prev = dNode_b

dll.head = dNode_a

dll.insertAtEnding(40)
dll.insertAtEnding(50)
dll.insertAtEnding(60)
dll.display()
