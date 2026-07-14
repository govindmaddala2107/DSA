from Node import Node
from SingleLinkedList import SingleLinkedList


class DetectInternalLoop(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def detectInternalLoop(self):
        fastNode = self.head
        slowNode = self.head
        while fastNode is not None and fastNode.next is not None:
            fastNode = fastNode.next.next
            slowNode = slowNode.next
            if slowNode is fastNode:
                print("Floyd cycle i.e internal loop is found")
                return True
        else:
            print("Floyd cycle i.e internal loop not found")
            return False


ll = DetectInternalLoop()
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

ll.detectInternalLoop()
