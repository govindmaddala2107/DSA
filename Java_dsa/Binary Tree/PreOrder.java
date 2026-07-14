import java.util.Stack;

public class PreOrder {

    private static class BinaryTree {
        private TreeNode root;

        private static class TreeNode {
            private TreeNode left = null;
            private TreeNode right = null;
            private int data;

            public TreeNode(int data) {
                this.data = data;
            }
        }

        /*
         * 
         * 
         *  1
         * 2 3
         * 4 [5] 6 7
         * 8 9 10 11 12
         * 
         */
        public TreeNode createBinaryTree() {
            TreeNode node1 = new TreeNode(1);
            TreeNode node2 = new TreeNode(2);
            TreeNode node3 = new TreeNode(3);
            TreeNode node4 = new TreeNode(4);
            TreeNode node5 = new TreeNode(5);
            TreeNode node6 = new TreeNode(6);
            TreeNode node7 = new TreeNode(7);
            TreeNode node8 = new TreeNode(8);
            TreeNode node9 = new TreeNode(9);
            TreeNode node10 = new TreeNode(10);
            TreeNode node11 = new TreeNode(11);
            TreeNode node12 = new TreeNode(12);

            this.root = node1;
            node1.left = node2;
            node1.right = node3;

            node2.left = node4;
            node2.right = node5;

            node3.left = node6;
            node3.right = node7;

            node4.left = node8;
            node4.right = node9;

            node6.left = node10;
            node6.right = node11;

            node7.left = node12;
            return this.root;
        }

        public void preOrderRecursive(TreeNode root){
            if(root == null) return;
            System.out.print(root.data + " --> ");
            preOrderRecursive(root.left);
            preOrderRecursive(root.right);
        }

        public void preOrderIterative(TreeNode root){
            if (root == null) return;
            Stack<TreeNode> stack = new Stack<>();
            stack.push(root);
            while (!stack.isEmpty()) {
                //pop out the top element and print the data
                TreeNode node = stack.pop();
                System.out.print(node.data + " --> ");
                // first push the right node since it will be removed last
                if(node.right != null){
                    stack.push(node.right);
                }
                if(node.left != null){
                    stack.push(node.left);
                }
            }
        }
    }

    public static void main(String[] args) {
        BinaryTree bt = new BinaryTree();
        var root = bt.createBinaryTree();
        /*
                1
            2       3
          4   5   6   7
        8   9   10  11  12

        op: 1 --> 2 --> 4 --> 8 --> 9 --> 5 --> 3 --> 6 --> 10 --> 11 --> 7 --> 12
         */

        // In PreOrder: root --> left --> right
        bt.preOrderRecursive(root);
        System.out.print(" null ");
        System.out.println(" ");
        System.out.println("================================================================================");

        bt.preOrderIterative(root);
        System.out.print(" null ");
    }

}
