from Node import Node


class Stack:
    def __init__(self):
        self.top = None
        self.length = 0

    def length_of_stack(self):
        print(self.length)

    def isStackEmpty(self):
        return self.length == 0

    def push(self, data):
        node = Node(data)
        node.next = self.top
        self.top = node
        self.length += 1

    def pop(self):
        if self.isStackEmpty():
            print("Stack is empty")
        topNode = self.top
        self.top = self.top.next
        self.length -= 1
        print(topNode.data, " is removed from stack")
        return  topNode.data

    def peek(self):
        if self.isStackEmpty():
            print("Stack is empty")
        else:
            print(self.top.data)

    def displayStack(self):
        temp = self.top
        if temp is None:
            print("Stack is empty")
        else:
            while temp is not None:
                print(temp.data, end=" --> ")
                temp = temp.next
            print("None")

