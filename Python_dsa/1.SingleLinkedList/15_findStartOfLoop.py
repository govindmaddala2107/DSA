from SingleLinkedList import SingleLinkedList
from Node import Node


class FindStartOfLoop(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def detectInternalLoop(self):
        fastNode = self.head
        slowNode = self.head
        isLoopExists = False
        while fastNode is not None and fastNode.next is not None:
            fastNode = fastNode.next.next
            slowNode = slowNode.next
            if slowNode is fastNode:
                print("Floyd cycle i.e internal loop is found")
                return slowNode
        else:
            print("Floyd cycle i.e internal loop not found")
            return None

    def findStartOfLoop(self):
        slowPointer = self.detectInternalLoop()
        if slowPointer is not None:
            temp = self.head
            while slowPointer is not temp:
                temp = temp.next
                slowPointer = slowPointer.next
            print("Starting loop is at :", slowPointer.data)


ll = FindStartOfLoop()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)
node5 = Node(60)
node6 = Node(70)
node7 = Node(80)

ll.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
ll.displayList()

# uncomment below line for creating internal loop
# node7.next = node3

ll.findStartOfLoop()
