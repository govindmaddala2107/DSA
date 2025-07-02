from Node import Node;
from SingleLinkedList import SingleLinkedList
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class DeleteAtBeginning(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def deleteAtBeginning(self):
        temp = self.head
        if temp is None:
            print("List is empty to delete")
        else:
            self.head = self.head.next
            temp.next = None


ll = DeleteAtBeginning()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
ll.head = node1
node1.next = node2
node2.next = node3
ll.displayList()
ll.deleteAtBeginning()
ll.displayList()
