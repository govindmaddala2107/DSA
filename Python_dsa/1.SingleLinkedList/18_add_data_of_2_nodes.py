'''
Given two non-empty linked lists representing two non-negative integers. The digits are stored in
reverse order, and each of their nodes containing a single digit. Add the two numbers and return
the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number ) itself.

Example(1): node_a: 3 -> 4 -> 5 -> None
         node_b: 5 -> 6 -> 4 -> None
         i.e normal numbers are 543 and 465 and their sum is 1008
         So, output node should be like 8 -> 0 -> 0 -> 1 -> None since operands are in reverse order, so the output is.

Example(2): node_a: 7 -> 4 -> 9 -> None
         node_b: 5 -> 6 -> None
         i.e normal numbers are 947 and 65 and their sum is 1012
         So, output node should be like 2 -> 1 -> 0 -> 1 -> None since operands are in reverse order, so the output is.

'''

from SingleLinkedList import SingleLinkedList
from Node import Node


class AddTwoNodes(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def add_two_nodes(self, a, b):
        dummy = Node(0)
        tail = dummy
        carry = 0
        while a is not None or b is not None:
            if a is not None:
                x = a.data
            else:
                x = 0

            if b is not None:
                y = b.data
            else:
                y = 0
            sum = x + y + carry
            carry = sum // 10
            tail.next = Node(sum % 10)
            tail = tail.next
            if a is not None:
                a = a.next
            if b is not None:
                b = b.next
        if carry > 0 :
            tail.next = Node(carry)
        self.head = dummy.next
        self.displayList()


a = SingleLinkedList()
b = SingleLinkedList()

node_a1 = Node(7)
node_a2 = Node(4)
node_a3 = Node(9)
node_a1.next = node_a2
node_a2.next = node_a3

node_b1 = Node(5)
node_b2 = Node(6)
node_b1.next = node_b2

a.head = node_a1
b.head = node_b1

addNodes = AddTwoNodes()
addNodes.add_two_nodes(a.head, b.head)
