import java.util.HashMap;
public class Solution {
    Tree tree;
    HashMap<Integer, Integer> scores;
    HashMap<Integer, Long> pens;

    public Solution(int numTeams) {
        this.tree = new Tree();
        this.scores = new HashMap<Integer, Integer>();
        this.pens = new HashMap<Integer, Long>();
        for (int i = 1; i <= numTeams; i++) {
            scores.put(i, 0);
            pens.put(i, 0L);
            this.tree.insert(0, 0);
        }
    }

    public int update(int team, long newPenalty){
        int currScore = scores.get(team);
        long currPen = pens.get(team);
        this.tree.delete(currScore, currPen);
        int newScore = currScore + 1;
        long newPen = currPen + newPenalty;
        scores.put(team, newScore);
        pens.put(team, newPen);
        this.tree.insert(newScore, newPen);
        return this.tree.getRank(scores.get(1), pens.get(1));
    }
    public class Tree {
        public class Node {
            int score;
            long pen;
            Node left;
            Node right;
            int height;
            int count;
            int weight;

            public Node(int score, long pen) {
                this.score = score;
                this.pen = pen;
                this.left = null;
                this.right = null;
                this.height = 1;
                this.count = 1;
                this.weight = 1;
            }
            public int compareSP(int score, long pen) {
                if (score > this.score || (score == this.score && pen < this.pen)) {
                    return 1;
                }
                if (score < this.score || (score == this.score && pen > this.pen)) {
                    return -1;
                }
                return 0;
            }
        }
        Node root;
        public Tree() {
            this.root = null;
        }

        public Node insertHelper(Node node, int score, long pen) {
            if (node == null) {
                return new Node(score, pen);
            }
            int compared = node.compareSP(score, pen);
            if (compared == 1) {
                node.left = insertHelper(node.left, score, pen);
            } else if (compared == -1) {
                node.right = insertHelper(node.right, score, pen);
            } else {
                node.count += 1;
            }
            setHeight(node);
            setWeight(node);
            int balance = getBalance(node);
            if (balance > 1 && node.left.compareSP(score, pen) == 1) {
                return rightRotate(node);
            }
            if (balance < -1 && node.right.compareSP(score, pen) == -1) {
                return leftRotate(node);
            }
            if (balance > 1 && node.left.compareSP(score, pen) == -1) {
                node.left = leftRotate(node.left);
                return rightRotate(node);
            }
            if (balance < -1 && node.right.compareSP(score, pen) == 1) {
                node.right = rightRotate(node.right);
                return leftRotate(node);
            }
            return node;
        }

        public void insert(int score, long pen) {
            this.root = insertHelper(this.root, score, pen);
        }

        public Node deleteHelper(Node node, int score, long pen) {
            if (node == null) {
                return null;
            }
            int compared = node.compareSP(score, pen);
            if (compared == 1) {
                node.left = deleteHelper(node.left, score, pen);
            } else if (compared == -1) {
                node.right = deleteHelper(node.right, score, pen);
            } else if (node.count > 1) {
                node.count--;
            } else {
                if (node.left == null) {
                    Node temp = node.right;
                    node = null;
                    return temp;
                } else if (node.right == null) {
                    Node temp = node.left;
                    node = null;
                    return temp;
                }
                Node temp = getMinValueNode(node.right);
                node.score = temp.score;
                node.pen = temp.pen;
                node.right = deleteHelper(node.right, temp.score, temp.pen);
            }
            if (node == null) {
                return node;
            }
            setHeight(node);
            setWeight(node);
            int balance = getBalance(node);

            if (balance > 1 && getBalance(node.left) >= 0) {
                return rightRotate(node);
            }
            if (balance < -1 && getBalance(node.right) <= 0) {
                return leftRotate(node);
            }
            if (balance > 1 && getBalance(node.left) < 0) {
                node.left = leftRotate(node.left);
                return rightRotate(node);
            }
            if (balance < -1 && getBalance(node.right) > 0) {
                node.right = rightRotate(node.right);
                return leftRotate(node);
            }
            return node;
        }

        public void delete(int score, long pen) {
            this.root = deleteHelper(this.root, score, pen);
        }

        public Node leftRotate(Node node) {
            Node right = node.right;
            Node rightLeft = right.left;
            right.left = node;
            node.right = rightLeft;
            setHeight(node);
            setWeight(node);
            setHeight(right);
            setWeight(right);
            return right;
        }

        public Node rightRotate(Node node) {
            Node left = node.left;
            Node leftRight = left.right;
            left.right = node;
            node.left = leftRight;
            setHeight(node);
            setWeight(node);
            setHeight(left);
            setWeight(left);
            return left;
        }

        public int getHeight(Node node) {
            if (node == null) {
                return 0;
            }
            return node.height;
        }

        public void setHeight(Node node) {
            node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
        }

        public int getWeight(Node node) {
            if (node == null) {
                return 0;
            }
            return node.weight;
        }

        public void setWeight(Node node) {
            node.weight = 1 + getWeight(node.left) + getHeight(node.right);
        }

        public int getBalance(Node node) {
            if (node == null) {
                return 0;
            }
            return this.getHeight(node.left) - this.getHeight(node.right);
        }

        public Node getMinValueNode(Node node) {
            if (node == null || node.left == null) {
                return node;
            }
            return this.getMinValueNode(node.left);
        }

        public int rankHelper(Node node, int score, long pen) {
            if (node == null) {
                return 0;
            }
            int compared = node.compareSP(score, pen);
            if (compared == 1) {
                return rankHelper(node.left, score, pen);
            }
            if (compared == -1) {
                return getWeight(node) - getWeight(node.right) + rankHelper(node.right, score, pen);
            }
            return getWeight(node.left);
        }

        public int getRank(int score, long pen) {
            return rankHelper(this.root, score, pen) + 1;
        }
    }

    public static void main(String[] args) {
        System.out.println(6);
    }
}
