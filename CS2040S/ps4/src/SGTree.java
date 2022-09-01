/**
 * ScapeGoat Tree class
 *
 * This class contains some of the basic code for implementing a ScapeGoat tree.
 * This version does not include any of the functionality for choosing which node
 * to scapegoat.  It includes only code for inserting a node, and the code for rebuilding
 * a subtree.
 */

public class SGTree {

    // Designates which child in a binary tree
    enum Child {LEFT, RIGHT}

    /**
     * TreeNode class.
     *
     * This class holds the data for a node in a binary tree.
     *
     * Note: we have made things public here to facilitate problem set grading/testing.
     * In general, making everything public like this is a bad idea!
     *
     */
    public static class TreeNode {
        int key;
        public TreeNode left = null;
        public TreeNode right = null;

        TreeNode(int k) {
            key = k;
        }
    }

    // Root of the binary tree
    public TreeNode root = null;

    public int countAllNodes(TreeNode node) {
        if (node == null) {
            return 0;
        } else {
            return countAllNodes(node.left) + countAllNodes(node.right) + 1;
        }
    }
    /**
     * Counts the number of nodes in the specified subtree
     *
     * @param node  the parent node, not to be counted
     * @param child the specified subtree
     * @return number of nodes
     */
    public int countNodes(TreeNode node, Child child) {
        if (node == null) {
            return -1;
        } else {
            switch(child) {
                case LEFT:
                    return countAllNodes(node.left);
                case RIGHT:
                    return countAllNodes(node.right);
            }
            return -1;
        }
    }

    public void addToTree(TreeNode node, TreeNode[] treeToReturn, int[] len) {
        if (node == null) {
            return;
        } else {
            addToTree(node.left, treeToReturn, len);
            treeToReturn[len[0]] = node;
            len[0] += 1;
            addToTree(node.right, treeToReturn, len);
        }
    }
    /**
     * Builds an array of nodes in the specified subtree
     *
     * @param node  the parent node, not to be included in returned array
     * @param child the specified subtree
     * @return array of nodes
     */
    public TreeNode[] enumerateNodes(TreeNode node, Child child) {
        TreeNode[] toReturn = new TreeNode[countNodes(node, child)];
        int[] len = new int[] { 0 };
        switch(child) {
            case RIGHT:
                TreeNode right = node.right;
                addToTree(node.right, toReturn, len);
                break;
            case LEFT:
                TreeNode left = node.left;
                addToTree(left, toReturn, len);
                break;
        }
        return toReturn;
    }

    public TreeNode buildTreeHelper(TreeNode[] nodeList, int start, int end) {
        if (start > end) {
            return null;
        } else {
            int mid = start + (end - start) / 2;
            TreeNode currentNode = nodeList[mid];
            currentNode.left = buildTreeHelper(nodeList, start, mid-1);
            currentNode.right = buildTreeHelper(nodeList, mid+1, end);
            return currentNode;
        }
    }
    /**
     * Builds a tree from the list of nodes
     * Returns the node that is the new root of the subtree
     *
     * @param nodeList ordered array of nodes
     * @return the new root node
     */
    public TreeNode buildTree(TreeNode[] nodeList) {
        return buildTreeHelper(nodeList, 0, nodeList.length - 1);
    }

    /**
    * Rebuilds the specified subtree of a node
    * 
    * @param node the part of the subtree to rebuild
    * @param child specifies which child is the root of the subtree to rebuild
    */
    public void rebuild(TreeNode node, Child child) {
        // Error checking: cannot rebuild null tree
        if (node == null) return;
        // First, retrieve a list of all the nodes of the subtree rooted at child
        TreeNode[] nodeList = enumerateNodes(node, child);
        // Then, build a new subtree from that list
        TreeNode newChild = buildTree(nodeList);
        // Finally, replace the specified child with the new subtree
        if (child == Child.LEFT) {
            node.left = newChild;
        } else if (child == Child.RIGHT) {
            node.right = newChild;
        }
    }

    /**
    * Inserts a key into the tree
    *
    * @param key the key to insert
    */
    public void insert(int key) {
        if (root == null) {
            root = new TreeNode(key);
            return;
        }

        TreeNode node = root;

        while (true) {
            if (key <= node.key) {
                if (node.left == null) break;
                node = node.left;
            } else {
                if (node.right == null) break;
                node = node.right;
            }
        }

        if (key <= node.key) {
            node.left = new TreeNode(key);
        } else {
            node.right = new TreeNode(key);
        }
    }


    // Simple main function for debugging purposes
    public static void main(String[] args) {
        SGTree tree = new SGTree();
//        tree.insert(6);
//        System.out.print(tree.root.key);
//        System.out.print(tree.root.left.left.key);
//        System.out.print(tree.root.left.key);
//        System.out.print(tree.root.left.right.key);
//        for (TreeNode node : tree.enumerateNodes(tree.root, Child.LEFT)) {
//            System.out.println(node.key);
//        }
        tree.rebuild(tree.root, Child.RIGHT);
        System.out.println(tree.root);
    }
}
