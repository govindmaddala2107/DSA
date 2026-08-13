from Node import Node;
from SingleLinkedList import SingleLinkedList


class InsertNodeIntoSortedNode(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def insertNodeIntoSortedNode(self, data):
        node = Node(data)
        current = self.head
        prev = None
        if current is None:
            self.head = node
        else:
            while current is not None and current.data < node.data:
                prev = current
                current = current.next
            node.next = prev.next
            prev.next = node


ll = InsertNodeIntoSortedNode()
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
ll.insertNodeIntoSortedNode(50)
ll.displayList()
