package dsa_java.LinkedLists;
class Node {
    public int data;
    public Node next;

    public Node(int data) {
        this.data = data;
    }
}

public class LinkedList {

    private Node head;

    public Node createLinkedList(int[] arr) {
        Node[] ll = new Node[arr.length];
        if (arr.length > 0) {
            for (int i = 0; i < arr.length; i++) {
                Node node = new Node(arr[i]);
                ll[i] = node;
            }
        } else {
            return null;
        }

        for (int i = 0; i < ll.length - 1; i++) {
            ll[i].next = ll[i + 1];
        }
        this.head = ll[0];
        return this.head;
    }

    public void display(Node head) {
        while (head != null) {
            System.out.print(head.data + " -> ");
            head = head.next;
        }
        System.out.print("null ");
    }
}
