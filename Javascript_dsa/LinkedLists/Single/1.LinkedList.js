import { Node } from './0.NodeCreation.js'
class LinkedList {
    constructor() {
        this.head = null;
    }
    display() {
        if (this.head == null) {
            console.log("List is empty");
        } else {
            var temp = this.head;
            var allValues = [];
            while (temp) {
                allValues.push(temp.data);
                allValues.push('-->')
                temp = temp.next;
            }
            console.log(...allValues, null);
        }
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

    insertAtBegin(data) {
        var node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    insertAtEnd(data) {
        var node = new Node(data);
        var temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = node;
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

    deleteAtBegin() {
        var temp = this.head;
        this.head = this.head.next;
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



    reverseLinkedList() {
        var temp = this.head;
        var prev = null;
        var next = null;
        while (temp) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        this.head = prev;
    }

    nthNodeFromLast(n) {
        var ref = this.head;
        var main = this.head;
        var count = 0;
        while (count < n) {
            ref = ref.next;
            count++;
        }
        while (ref) {
            ref = ref.next;
            main = main.next;
        }
        console.log(main.data);
    }

    removeDuplicates() {
        var fixedNode = this.head;
        var temp = null;
        while (fixedNode) {
            temp = fixedNode;
            while (temp.next) {
                if (fixedNode.data === temp.next.data) {
                    temp.next = temp.next.next;
                } else {
                    temp = temp.next;
                }
            }
            fixedNode = fixedNode.next;
        }
    }

    reverseListAndDisplay() {
        var temp = this.head;
        var prev = null;
        var next = null;
        while (temp) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        this.head = prev;
        var dummy = prev;
        var allValues = [];
        while (dummy) {
            allValues.push(dummy.data);
            allValues.push("-->");
            dummy = dummy.next;
        }
        console.log(...allValues, null);
    }
}

export { LinkedList };




