from Node import Node;
from SingleLinkedList import SingleLinkedList


class RemoveKeyFromList(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def removeKeyFromList(self, key):
        if self.head is None:
            print("List is empty")
        else:
            current = self.head
            prev = None
            while current is not None and current.data is not key:
                prev = current
                current = current.next
            if current is None:
                return
            prev.next = current.next


ll = RemoveKeyFromList()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)
node5 = Node(50)
node6 = Node(60)
node7 = Node(70)

ll.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7

ll.displayList()
ll.removeKeyFromList(40)
ll.removeKeyFromList(40)
ll.displayList()
