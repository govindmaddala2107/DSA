from Node import Node;
from SingleLinkedList import SingleLinkedList


class DeleteAtEnding(SingleLinkedList):
    def __init__(self):
        super().__init__()


    def deleteAtEnding(self):
        temp = self.head
        if temp is None:
            print("List is empty to delete")
        else:
            while temp.next.next is not None:
                temp = temp.next
        temp.next = None


ll = DeleteAtEnding()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
ll.head = node1
node1.next = node2
node2.next = node3
ll.displayList()
ll.deleteAtEnding()
ll.displayList()
