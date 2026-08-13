from Node import Node;
from SingleLinkedList import SingleLinkedList


class ReverseLinkedList(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def reverseLinkedList(self):
        prevNode = None
        temp = self.head
        while temp is not None:
            nextNode = temp.next
            temp.next = prevNode
            prevNode = temp
            temp = nextNode
        self.head = prevNode


ll = ReverseLinkedList()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)

ll.head = node1
node1.next = node2
node2.next = node3

ll.displayList()
ll.reverseLinkedList()
ll.displayList()
