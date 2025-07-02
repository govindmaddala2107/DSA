"""
Logic for finding nth node from the end of the list:
    To find out nth node from the end, first make one temporary node to make n steps and now run a while loop in which
another temporary node is run from the head until previous temporary node is null.

"""
from Node import Node;
from SingleLinkedList import SingleLinkedList


class NthElementFromEnd(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def nthElementFromEnd(self,n):
        count = 0
        temp = self.head
        while count < n:
            temp = temp.next
            count += 1
        slowPointer = self.head
        while temp is not None:
            temp = temp.next
            slowPointer = slowPointer.next
        print(slowPointer.data)


ll = NthElementFromEnd()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)

ll.head = node1
node1.next = node2
node2.next = node3
node3.next = node4

ll.displayList()
ll.nthElementFromEnd(2)
