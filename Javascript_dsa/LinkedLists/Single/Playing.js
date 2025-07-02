import  {Node,List}  from "./Creation.js";


var node1 = new Node(10);
var list = new List();
list.head = node1;

var node2 = new Node(20);
var node3 = new Node(30);
var node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;
list.display();