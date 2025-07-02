class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
    }

    search(data) {
        var temp = this.head;
        var result = `${data} is not found`;
        while (temp) {
            if (temp.data == data) {
                result = `${data} is found`;
                break;
            }
            temp = temp.next;
        }
        console.log(result);
    }

    displayForward() {
        if (this.head == null) {
            console.log("List is empty");
        } else {
            var temp = this.head;
            var allValues = []
            while (temp) {
                allValues.push(temp.data);
                allValues.push('-->')
                temp = temp.next;
            }
            console.log(...allValues, null);
        }
    }

    displayBackward() {
        if (this.head == null) {
            console.log("List is empty");
        } else {
            var temp = this.head;
            var allValues = []
            while (temp.next) {
                temp = temp.next;
            }
            while (temp) {
                allValues.push('<--')
                allValues.push(temp.data);

                temp = temp.prev;
            }
            console.log(null, ...allValues);
        }
    }

    insertAtBegin(data) {
        var node = new Node(data);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAtEnd(data) {
        var node = new Node(data);
        var temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = node;
        node.prev = temp;
    }

    insertAtIndexNum(data, indexNum) {
        var node = new Node(data);
        var temp = this.head;
        for (var i = 0; i < indexNum - 1; i++) {
            temp = temp.next;
        }
        node.next = temp.next;
        temp.next.prev = node;
        node.prev = temp;
        temp.next = node;
    }

    deleteAtBegin() {
        var temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
    }

    deleteAtEnd() {
        var nextNode = this.head.next;
        var prevNode = this.head;
        while (nextNode.next) {
            nextNode = nextNode.next;
            prevNode = prevNode.next;
        }
        prevNode.next = null;
        nextNode.prev = null;
    }

    deleteAtIndexNum(indexNum) {
        var temp = this.head.next;
        var prev = this.head;
        for (let i = 0; i < indexNum-1; i++) {
            temp = temp.next;
            prev = prev.next;
        }

        prev.next = temp.next;
        temp.next.prev = prev;
        temp.next = null;
        temp.prev = null;

//   6 --> 7 --> 9 --> 8 --> 10 --> 11 --> null        
    }

    removeDuplicates(){
        var fixed = this.head;
        while(fixed){

            var temp = fixed;
            while(temp.next){
                if(fixed.data == temp.data){
                    var prevNode = temp.prev;
                    
                }
            }
        }
    }
}

var node1 = new Node(9);
var dll = new DoubleLinkedList();
dll.head = node1;

var node2 = new Node(8);
node1.next = node2;
node2.prev = node1;

dll.insertAtBegin(7)
dll.insertAtEnd(10)

dll.insertAtBegin(6)
dll.insertAtEnd(11)
// dll.insertAtIndexNum(25,3)
dll.displayForward()
// dll.displayBackward()
// dll.deleteAtBegin()
// dll.displayForward()

// dll.deleteAtEnd()
// dll.displayForward()

// dll.deleteAtIndexNum(1)
// dll.displayForward()

// dll.deleteAtIndexNum(2)
// dll.displayForward()
// dll.deleteAtIndexNum(2)
// dll.displayForward()
dll.deleteAtIndexNum(2)
dll.displayForward()