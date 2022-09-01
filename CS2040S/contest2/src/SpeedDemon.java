import java.io.File;  // Import the File class
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files
import java.util.HashMap;
import java.util.ArrayList;

public class SpeedDemon {

    /**
     * Returns the number of pairs of entries containing an identical multiset,
     * as described in the pdf.
     *
     * @param filename name of the file containing the input
     * @return number of pairs
     */
    public int processData(String filename){
        File file = new File(filename);
        char start = (char) 0;
        Node root = new Node(start);
        try {
            Scanner reader = new Scanner(file);
            String first = reader.nextLine();
            while (reader.hasNextLine()) {
                String data = reader.nextLine();
                HashMap<Character, Integer> chars = new HashMap<>();
                for (int i = 0; i < data.length(); i++) {
                    char c = data.charAt(i);
                    if (chars.containsKey(c)) {
                        chars.put(c, chars.get(c)+1);
                    } else {
                        chars.put(c, 1);
                    }
                }
                root.add(chars);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return root.accumulateTotal();
    }

    public static class Node {
        static Choose choose = new Choose();
        HashMap<Integer, Node> dictionary;
        int count;
        char key;
        public Node(char key) {
            this.key = key;
            this.count = 0;
            this.dictionary = new HashMap<Integer, Node>();
        }

        public void add(HashMap<Character, Integer> chars) {
            this.count += 1;
            int value = 0;
            if (chars.containsKey(key)) {
                value = chars.get(key);
            }
            if (!this.dictionary.containsKey(value)) {
                this.dictionary.put(value, new Node((char) ((int) key + 1)));
            }
            if ((int) this.key != 128) {
                this.dictionary.get(value).add(chars);
            }
        }

        public int accumulateTotal() {
            if ((int) this.key == 128) {
                return (this.count-1)*(this.count)/2;
            }
            int total = 0;
            for (Node node : this.dictionary.values()) {
                total += node.accumulateTotal();
            }
            return total;
        }
    }

    public static class Choose {
        HashMap<Integer, Integer[]> memo;
        public Choose() {
            this.memo = new HashMap<Integer, Integer[]>();
        }
        public int choose(int n, int k) {
            if (n < k || n == 0) return 0;
            if (k == 0 || n == k) return 0;
            if (k == 1) return n;
            if (!this.memo.containsKey(n)) {
                this.memo.put(n, new Integer[n]);
            }
            if (this.memo.get(n)[k] == null) {
                this.memo.get(n)[k] = this.choose(n-1, k) + this.choose(n, k-1);
            }
            return this.memo.get(n)[k];
        }
    }

    // DO NOT EDIT this method for contest submission, as it will used by the grader
    public static void main(String[] args){
        SpeedDemon dataProcessor = new SpeedDemon();
//        int answer = dataProcessor.processData(args[0]);    // Expects input file name as CLI argument
        int answer = dataProcessor.processData("example.in");
        System.out.println(answer);
    }
}
