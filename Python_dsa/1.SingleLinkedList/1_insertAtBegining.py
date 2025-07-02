from Node import Node;
from SingleLinkedList import SingleLinkedList

class InsertAtBegining(SingleLinkedList):
    def __init__(self):
        super().__init__()
    
    def insertAtBegining(self,data):
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            node.next = self.head
            self.head = node


ll = InsertAtBegining()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
ll.head = node1
node1.next = node2
node2.next = node3
ll.displayList()
ll.insertAtBegining(5)
ll.displayList()
