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
        int weight;
        public TreeNode left = null;
        public TreeNode right = null;

        TreeNode(int k) {
            key = k;
            weight = 1;
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

    public int getWeight(TreeNode node) {
        if (node == null) {
            return 0;
        } else {
            return node.weight;
        }
    }

    public void fixWeights(TreeNode node, Child child) {
        TreeNode startNode = child == Child.RIGHT ? node.right : node.left;
        reset(startNode);
    }

    public void reset(TreeNode node) {
        if (node == null) return;
        if (node.left == null && node.right == null) {
            node.weight = 1;
            return;
        }
        int left = 0;
        int right = 0;
        if (node.left != null) {
            reset(node.left);
            left = node.left.weight;
        }
        if (node.right != null) {
            reset(node.right);
            right = node.right.weight;
        }
        node.weight = 1 + left + right;
    }

    /**
     * Determines if a node is balanced. If the node is balanced, this should return true. Otherwise, it should return
     * false. A node is unbalanced if either of its children has weight greater than 2/3 of its weight.
     *
     * @param node a node to check balance on
     * @return true if the node is balanced, false otherwise
     */
    public boolean checkBalance(TreeNode node) {
        if (node == null) {
            return true;
        } else {
            int left = getWeight(node.left);
            int right = getWeight(node.right);
            return (left <= ((right+1)*2)) && (right <= ((left+1)*2));
        }
    }

    /**
     * Rebuild the specified subtree of a node.
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
        fixWeights(node, child);
    }

    /**
     * Insert a key into the tree
     *
     * @param key the key to insert
     */
    public void insert(int key) {
        if (root == null) {
            root = new TreeNode(key);
        } else {
            TreeNode node = root;
            int numberOfNodes = root.weight + 1;
            TreeNode[] pathTaken = new TreeNode[numberOfNodes];
            int depthOfTravel = 0;
            while (true) {
                pathTaken[depthOfTravel++] = node;
                node.weight++;
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
            for (int i = 0; i <= depthOfTravel-1; i++) {
                if (!checkBalance(pathTaken[i+1])) {
                    if (pathTaken[i].right == pathTaken[i+1]) {
                        rebuild(pathTaken[i], Child.RIGHT);
                    } else {
                        rebuild(pathTaken[i], Child.LEFT);
                    }
                    break;
                }
            }
        }
    }

    // Simple main function for debugging purposes
    public static void main(String[] args) {
        SGTree tree = new SGTree();
//        int[] toAdd = new int[1000];
//        for (int i = 0; i < 1000; i++) {
//            toAdd[i] = (int)(Math.random()*1000);
//        }
//        int[] toAdd = new int[] {0,1,2,3,4,5,6};
        for (int i = 0; i < 12; i++) {
//            System.out.println(i);
            tree.insert(i);
        }
//        for (int i : toAdd) {
//            tree.insert(i);
//        }
        for (TreeNode node : tree.enumerateNodes(tree.root, Child.RIGHT)) {
            System.out.print(node.key);
            System.out.print(": ");
            System.out.println(node.weight);
        }
    }
}
