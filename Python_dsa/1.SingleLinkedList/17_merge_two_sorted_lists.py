from Node import Node
from SingleLinkedList import SingleLinkedList


class MergeTwoSortedLists(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def merge_two_sorted_node(self, node_a, node_b):
        dummy = Node(0)
        tail = dummy
        while node_a is not None and node_b is not None:
            if node_a.data <= node_b.data:
                tail.next = node_a
                node_a = node_a.next
            else:
                tail.next = node_b
                node_b = node_b.next
            tail = tail.next
        if node_a is None:
            tail.next = node_b
        else:
            tail.next = node_a
        self.head = dummy.next
        self.displayList()


ll_a = SingleLinkedList()
ll_b = SingleLinkedList()

node_a1 = Node(10)
node_a2 = Node(30)
node_a3 = Node(50)
node_a4 = Node(70)
node_a5 = Node(90)
node_a6 = Node(110)
node_a7 = Node(110)


node_a1.next = node_a2
node_a2.next = node_a3
node_a3.next = node_a4
node_a4.next = node_a5
node_a5.next = node_a6
node_a6.next = node_a7
ll_a.head = node_a1

node_b1 = Node(20)
node_b2 = Node(40)
node_b3 = Node(60)
node_b4 = Node(80)
node_b5 = Node(100)

node_b1.next = node_b2
node_b2.next = node_b3
node_b3.next = node_b4
node_b4.next = node_b5
ll_b.head = node_b1

mergeClass = MergeTwoSortedLists()
mergeClass.merge_two_sorted_node(ll_a.head, ll_b.head)
