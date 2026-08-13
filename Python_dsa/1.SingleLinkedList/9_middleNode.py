"""
Logic of finding middle node:
    Initially fast-pointer and slow-pointer points head but when fast-pointer jumps by 2 steps for single jump of slow
    pointer, slow pointer reaches middle node when fast pointer reached the end of the list.
"""

from Node import Node;
from SingleLinkedList import SingleLinkedList


class MiddleNode(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def middleNode(self):
        fastNode = self.head
        slowNode = self.head
        while fastNode is not None and fastNode.next is not None :
            fastNode = fastNode.next.next
            slowNode = slowNode.next
        print(slowNode.data)


ll = MiddleNode()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)
node5 = Node(50)

ll.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

ll.displayList()
ll.middleNode()

