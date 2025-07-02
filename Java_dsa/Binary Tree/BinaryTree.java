import java.util.Stack;

class BinaryTree {

    public TreeNode root;

    public static class TreeNode {
        int data;
        TreeNode left = null;
        TreeNode right = null;

        public TreeNode(int data) {
            this.data = data;
        }
    }

    public void createBinaryTree(){
        TreeNode node1 = new TreeNode(1);
        TreeNode node2 = new TreeNode(2);
        TreeNode node3 = new TreeNode(3);
        TreeNode node4 = new TreeNode(4);
        TreeNode node5 = new TreeNode(5);
        TreeNode node6 = new TreeNode(6);
        TreeNode node7 = new TreeNode(7);
        TreeNode node8 = new TreeNode(8);
        TreeNode node9 = new TreeNode(9);

        /*
            (7) <= (3) <= (1) => (2) => (4) => (8)
                    => (5)   (6) <=

                      1
                3           2
            7       5  4        6
        9             8          
        */

        this.root = node1;
        node1.left = node3;

        node3.left = node7;
        node3.right = node5;

        node7.left = node9;

        node1.right = node2;
        node2.left = node6;
        node2.right = node4;

        node4.right = node8;

        preOrder(root);
        System.out.println("------------------------------------");
        iterativePreOrder(root);

    }

    public void preOrder(TreeNode root){
        if(root == null){
            return;
        }

        System.out.print(root.data);
        System.out.print(" ");

        preOrder(root.left);
        preOrder(root.right);
    }

    public void iterativePreOrder(TreeNode root){
        if(root == null){
            return;
        }
        Stack <TreeNode> stack = new Stack<>();
        stack.push(root);
        while(!stack.isEmpty()){
            TreeNode temp = stack.pop();
            System.out.print(temp.data + " ");
            if(temp.right != null){
                stack.push(temp.right);
            }

            if(temp.left != null){
                stack.push(temp.left);
            }
        }
    }
    public static void main(String[] args) {
        BinaryTree bt = new BinaryTree();
        bt.createBinaryTree();
        System.out.println("----------");
        bt.iterativePreOrder(bt.root);
    }
}