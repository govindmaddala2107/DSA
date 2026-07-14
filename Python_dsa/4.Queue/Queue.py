class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def displayQueue(self):
        temp = self.front
        if temp is None:
            print("Queue is empty")
        else:
            while temp is not None:
                print(temp.data, end=" --> ")
                temp = temp.next
            print(None)