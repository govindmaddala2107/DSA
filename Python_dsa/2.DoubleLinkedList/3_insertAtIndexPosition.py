from doubleNode import DoubleNode
from DoubleLinkedList import DoubleLinkedList


class InsertAtIndexPosition(DoubleLinkedList):
    def __init__(self):
        super().__init__()

    def insertAtIndexPosition(self, data, indexNum):
        node = DoubleNode(data)
        temp = self.head
        for i in range(0, indexNum - 1):
            temp = temp.next
        print(temp.data)
        if temp is not None and temp.next is not None and temp.prev is not None:
            node.prev = temp
            node.next = temp.next
            temp.next.prev = node
            temp.next = node
        elif temp is not None and temp.next is None:
            temp.next = node
            node.prev = temp
        elif temp is not None and temp.prev is None:
            node.next = temp
            temp.prev = node
            self.head = node
        else:
            print("Index is out of range")


dll = InsertAtIndexPosition()
dll.display()

dNode_a = DoubleNode(10)
dNode_b = DoubleNode(20)
dNode_c = DoubleNode(40)

dNode_a.next = dNode_b

dNode_b.next = dNode_c
dNode_b.prev = dNode_a

dNode_c.prev = dNode_b

dll.head = dNode_a
dll.display()
dll.insertAtIndexPosition(30,2)
dll.display()
dll.insertAtIndexPosition(50,4)
dll.display()
dll.insertAtIndexPosition(0,0)
dll.display()
