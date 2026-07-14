package dsa_java.LinkedLists;
public class MidNode {

    /*
    Input: linked list = 1 -> 2 -> 3 -> 4 -> 5
    Output: 3 
    Explanation: There are 5 nodes in the linked list and there is one middle node whose value is 3.

    Input: linked list = 1 -> 2 -> 3 -> 4 -> 5 -> 6
    Output: 4 

    Explanation: There are 6 nodes in the linked list, so we have two middle nodes: 3 and 4, but we will return 
    the second middle node which is 4. 
     
    */

    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        int[] arr = {1,2,3,4,5,6};
        Node head = ll.createLinkedList(arr);
        ll.display(head);
    }
}
