class Node:
    def __init__(self, data):
        self.data =  data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self.length = 0


    def push(self, data):
        node = Node(data)
        node.next = self.top
        self.top = node
        self.length += 1
    
    def pop(self):
        if self.length == 0:
            return "Stack is empty"
        topNode = self.top
        self.top = self.top.next
        topNode.next = None
        self.length -= 1
        return topNode.data
    
    def displayStack(self):
        topNode = self.top
        if topNode is None:
            print("Stack is empty")
            return
        while topNode is not None:
            print(topNode.data, end=" --> ")
            topNode = topNode.next
        print("None")
    
    def reverseWord(self, word):
        stack = Stack()
        for i in word:
            stack.push(i)
        stack.displayStack()
        topNode = stack.top
        reverse = ""
        while topNode is not None:
            reverse += topNode.data
            topNode = topNode.next
        return reverse

stack = Stack()
stack.displayStack()
stack.push(10)
stack.displayStack()
print(stack.pop())

print(stack.reverseWord("govind"))
        
