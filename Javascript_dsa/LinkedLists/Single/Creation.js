class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
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
}

export {List,Node};