from Node import Node;
from SingleLinkedList import SingleLinkedList

class SearchElement(SingleLinkedList):
    def __init__(self):
        super().__init__()

    def searchElement(self,data):
        temp = self.head
        while temp is not None:
            if temp.data is data:
                print(data,end=" found\n")
                break
            temp = temp.next

        else:
            print(data,end=" not found\n")


ll = SearchElement()
ll.displayList()
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)

ll.head = node1
node1.next = node2
node2.next = node3

ll.displayList()
ll.searchElement(20)
ll.searchElement(40)
