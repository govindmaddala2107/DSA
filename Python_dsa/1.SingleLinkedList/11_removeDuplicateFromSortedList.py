from Node import Node;
from SingleLinkedList import SingleLinkedList


class RemoveDuplicateFromSortedList(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def removeDuplicateFromSortedList(self):
        if self.head is None:
            print("List is empty")
        else:
            temp = self.head
            while temp is not None and temp.next is not None:
                if temp.data is temp.next.data:
                    temp.next = temp.next.next
                    temp = self.head
                temp = temp.next


ll = RemoveDuplicateFromSortedList()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)
node5 = Node(40)
node6 = Node(40)
node7 = Node(50)

ll.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7

ll.displayList()
ll.removeDuplicateFromSortedList()
ll.displayList()
