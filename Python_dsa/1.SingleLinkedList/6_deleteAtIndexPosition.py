from Node import Node;
from SingleLinkedList import SingleLinkedList


class DeleteAtIndexPosition(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def deleteAtIndexPosition(self, pos):
        temp = self.head
        nextNode = self.head.next
        if temp is None:
            print("List is empty to delete")
        else:
            for i in range(0, pos - 1):
                temp = temp.next
                nextNode = nextNode.next
        temp.next = nextNode.next
        nextNode.next = None


ll = DeleteAtIndexPosition()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
ll.head = node1
node1.next = node2
node2.next = node3
ll.displayList()
ll.deleteAtIndexPosition(1)
ll.displayList()
