class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class CircularLinkedList {
    constructor() {
        this.head = null;
    }
    display() {
        if (this.head == null) {
            console.log("List is empty");
        } else {
            var temp = this.head;
            var allValues = [];
            while (temp.next != this.head) {
                allValues.push(temp.data);
                allValues.push('-->')
                temp = temp.next;
            }
            allValues.push(temp.data);
            allValues.push('-->')
            console.log(...allValues, null);
        }
    }


    search(data) {
        var temp = this.head;
        var result = `${data} is not found`;
        while (temp.next != this.head) {
            if (temp.data == data) {
                result = `${data} is found`;
                break;
            }
            temp = temp.next;
        }
        if (temp.data == data) {
            result = `${data} is found`;
        }
        console.log(result);
    }

    insertAtBeginAndEnd(data) {
        var node = new Node(data);
        var temp = this.head;
        while (temp.next != this.head) {
            temp = temp.next
        }
        temp.next = node;
        node.next = this.head;
        this.head = node;

    }

    insertAtPosition(data, indexNum) {
        var node = new Node(data);
        var temp = this.head;
        for (var i = 0; i < indexNum - 1; i++) {
            temp = temp.next;
        }
        node.next = temp.next;
        temp.next = node;
    }


    deleteAtBeginAndEnd() {
        var tempNode = this.head;
        var fixedHead = this.head;
        while (tempNode.next != this.head) {
            tempNode = tempNode.next
        }
        tempNode.next = this.head.next;
        this.head = this.head.next;
        fixedHead.next = null;
    }

    deleteAtPosition(indexNum) {
        var nextNode = this.head.next;
        var prevNode = this.head;
        for (var i = 0; i < indexNum - 1; i++) {
            nextNode = nextNode.next;
            prevNode = prevNode.next;
        }
        prevNode.next = nextNode.next;
        nextNode.next = null;
    }
}

var node1 = new Node(10)
var cll = new CircularLinkedList()
cll.head = node1;
node1.next = cll.head;

var node2 = new Node(20)
node1.next = node2;
node2.next = cll.head;

var node3 = new Node(30);
node2.next = node3;
node3.next = cll.head;

var node4 = new Node(40);
node3.next = node4;
node4.next = cll.head;

var node5 = new Node(50)
node4.next = node5;
node5.next = cll.head;

cll.display()

cll.insertAtBeginAndEnd(5);
cll.insertAtBeginAndEnd(0);
cll.insertAtPosition(25, 4)
cll.display()

// cll.search(5);
// cll.search(49);
console.log("=============first delete==========");
cll.deleteAtBeginAndEnd();
cll.display();
console.log("=============Second delete==========");
cll.deleteAtBeginAndEnd();
cll.display();
console.log("=============Third delete==========");
cll.deleteAtBeginAndEnd();
cll.display();

console.log("=============Delete @ Position==========");
cll.deleteAtPosition(1);
cll.display();
