import java.util.ArrayList;

public class Trie {

    // Wildcards
    public TrieNode startNode;
    final char WILDCARD = '.';

    private class TrieNode {
        char key;
        boolean isTerminal;
        int[] presentChars;
        TrieNode[] children;
        public TrieNode(char c) {
            key = c;
            isTerminal = false;
            presentChars = new int[62];
            children = new TrieNode[62];
            for (int i = 0; i < 62; i++) {
                presentChars[i] = 0;
            }
        }
    }

    public Trie() {
        char key = 47;
        startNode = new TrieNode(key);
    }

    private int charToInt(char c) {
        if (c < 58) return c - 48;
        if (c < 91) return c - 65;
        return c - 97;
    }

    /**
     * Inserts string s into the Trie.
     *
     * @param s string to insert into the Trie
     */
    void insert(String s) {
        TrieNode node = startNode;
        int length = s.length();
        for (int i = 0; i < length; i++) {
            int currentChar = charToInt(s.charAt(i));
            if (node.presentChars[currentChar] == 0) {
                node.presentChars[currentChar] = 1;
                node.children[currentChar] = new TrieNode(s.charAt(i));
            }
            node = node.children[currentChar];
        }
        node.isTerminal = true;
    }

    /**
     * Checks whether string s exists inside the Trie or not.
     *
     * @param s string to check for
     * @return whether string s is inside the Trie
     */
    boolean contains(String s) {
        TrieNode node = startNode;
        int length = s.length();
        for (int i = 0; i < length; i++) {
            int currentChar = charToInt(s.charAt(i));
            if (node.children[currentChar] == null) return false;
            node = node.children[currentChar];
        }
        return node.isTerminal;
    }

    void getAll(ArrayList<String> results, int[] limit, TrieNode node, StringBuilder currString) {
        if (node == null) return;
        if (node.isTerminal && limit[0] > 0) {
            results.add(currString.toString());
            limit[0]--;
        }
        for (TrieNode child : node.children) {
            if (child != null) {
                StringBuilder newString = new StringBuilder(currString.toString());
                getAll(results, limit, child, newString.append(child.key));
            }
        }
    }

    void helper(String s, ArrayList<String> results, int[] limit, TrieNode node, StringBuilder currString) {
        if (node == null) return;
        if (s == null || s == "") {
            getAll(results, limit, node, currString);
            return;
        }
        int length = s.length();
        char c = s.charAt(0);
        int charNum = charToInt(c);
        if (length == 0) {
            getAll(results, limit, node, currString);
        } else if (length == 1) {
            if (c == WILDCARD) {
                for (TrieNode child : node.children) {
                    if (child != null) {
                        StringBuilder newString = new StringBuilder(currString.toString());
                        getAll(results, limit, child, newString.append(child.key));
                    }
                }
            } else {
                StringBuilder newString = new StringBuilder(currString.toString());
                getAll(results, limit, node.children[charNum], newString.append(c));
            }
        } else {
            String sub = s.substring(1, length);
            if (c == WILDCARD) {
                for (TrieNode child : node.children) {
                    if (child != null) {
                        StringBuilder newString = new StringBuilder(currString.toString());
                        helper(sub, results, limit, child, newString.append(child.key));
                    }
                }
            } else {
                StringBuilder newString = new StringBuilder(currString.toString());
                helper(sub, results, limit, node.children[charNum], newString.append(c));
            }
        }
    }
    /**
     * Searches for strings with prefix matching the specified pattern sorted by lexicographical order. This inserts the
     * results into the specified ArrayList. Only returns at most the first limit results.
     *
     * @param s       pattern to match prefixes with
     * @param results array to add the results into
     * @param limit   max number of strings to add into results
     */
    void prefixSearch(String s, ArrayList<String> results, int limit) {
        helper(s, results, new int[] {limit}, startNode, new StringBuilder());
    }


    // Simplifies function call by initializing an empty array to store the results.
    // PLEASE DO NOT CHANGE the implementation for this function as it will be used
    // to run the test cases.
    String[] prefixSearch(String s, int limit) {
        ArrayList<String> results = new ArrayList<String>();
        prefixSearch(s, results, limit);
        return results.toArray(new String[0]);
    }


    public static void main(String[] args) {
        Trie t = new Trie();
        t.insert("peter");
        t.insert("piper");
        t.insert("picked");
        t.insert("a");
        t.insert("peck");
        t.insert("of");
        t.insert("pickled");
        t.insert("peppers");
        t.insert("pepppito");
        t.insert("pepi");
        t.insert("pik");

//        System.out.println(t.contains("pik"));
//        System.out.println(t.contains("peec"));

        String[] result1 = t.prefixSearch("", 10);
//        String[] result2 = t.prefixSearch("pe.", 10);
        for (String result : result1) {
            System.out.println(result);
        }
        // result1 should be:
        // ["peck", "pepi", "peppers", "pepppito", "peter"]
        // result2 should contain the same elements with result1 but may be ordered arbitrarily
    }
}
