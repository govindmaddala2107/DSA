from Node import Node
from Stack import Stack


class ReverseString(Stack):
    reverseWord = ""

    def __init__(self):
        super().__init__()

    def reverseString(self, word):
        for x in word:
            self.push(x)

    def getReversedWord(self):
        while self.top is not None:
            self.reverseWord += self.pop()

        #### or another method ########
        # temp = self.top
        # if temp is None:
        #     print("Stack is empty")
        # else:
        #     while temp is not None:
        #         self.reverseWord += temp.data
        #         temp = temp.next
        # print(self.reverseWord)


rev = ReverseString()
rev.reverseString("word")
rev.displayStack()
rev.getReversedWord()
print(rev.reverseWord)
