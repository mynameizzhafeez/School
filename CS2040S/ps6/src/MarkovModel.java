import java.util.*;

/**
 * This is the main class for your Markov Model.
 *
 * Assume that the text will contain ASCII characters in the range [1,255].
 * ASCII character 0 (the NULL character) will be treated as a non-character.
 *
 * Any such NULL characters in the original text should be ignored.
 */
public class MarkovModel {

	// Use this to generate random numbers as needed
	private Random generator = new Random();

	// This is a special symbol to indicate no character
	public static final char NOCHARACTER = (char) 0;

	private int order;
	private HashMap<String, HashMap<Character, Integer>> next;
	private HashMap<String, Integer> freq;

	/**
	 * Constructor for MarkovModel class.
	 *
	 * @param order the number of characters to identify for the Markov Model sequence
	 * @param seed the seed used by the random number generator
	 */
	public MarkovModel(int order, long seed) {
		// Initialize your class here
		this.next = new HashMap<String, HashMap<Character, Integer>>();
		this.freq = new HashMap<String, Integer>();

		this.order = order;
		// Initialize the random number generator
		generator.setSeed(seed);
	}

	/**
	 * Builds the Markov Model based on the specified text string.
	 */
	public void initializeText(String text) {
		// Build the Markov model here
		int length = text.length();
		for (int i = 0; i < length-this.order; i++) {
			String cut = text.substring(i, i+this.order);
			if (this.freq.get(cut) == null) {
				this.freq.put(cut, 1);
			} else {
				this.freq.put(cut, this.freq.get(cut)+1);
			}
			char nextChar;
			if (i+this.order+1 == length) {
				nextChar = NOCHARACTER;
			} else {
				nextChar = text.charAt(i+this.order);
			}
			if (this.next.get(cut) == null) {
				HashMap<Character, Integer> tempHash = new HashMap<Character, Integer>();
				tempHash.put(nextChar, 1);
				this.next.put(cut, tempHash);
			} else if (this.next.get(cut).get(nextChar) == null) {
				this.next.get(cut).put(nextChar, 1);
			} else {
				int val = this.next.get(cut).get(nextChar);
				this.next.get(cut).put(nextChar, val+1);
			}
		}
	}

	/**
	 * Returns the number of times the specified kgram appeared in the text.
	 */
	public int getFrequency(String kgram) {
		if (this.freq.get(kgram) == null) return 0;
		return this.freq.get(kgram);
	}

	/**
	 * Returns the number of times the character c appears immediately after the specified kgram.
	 */
	public int getFrequency(String kgram, char c) {
		if (this.next.get(kgram) == null) return 0;
		if (this.next.get(kgram).get(c) == null) return 0;
		return this.next.get(kgram).get(c);
	}

	/**
	 * Generates the next character from the Markov Model.
	 * Return NOCHARACTER if the kgram is not in the table, or if there is no
	 * valid character following the kgram.
	 */
	public char nextCharacter(String kgram) {
		// See the problem set description for details
		// on how to make the random selection.
		HashMap<Character, Integer> map = this.next.get(kgram);
		int size = map.size();
		char[] chars = new char[size];
		int i = 0;
		for (HashMap.Entry<Character, Integer> set : map.entrySet()) {
			if (set.getValue() != 0) chars[i] = set.getKey();
			i++;
		}
		Arrays.sort(chars, 0, size);
		int total = this.freq.get(kgram);
		int num = generator.nextInt(total);
		for (char c : chars) {
			Integer count = map.get(c);
			if (count == null) continue;
			if (num < count) return c;
			total -= count;
			num -= count;
		}
		return NOCHARACTER;
	}

	public static void main(String[] args) {
		String[] argsInput = new String[3];
		String text = "abcde";
        argsInput[0] = "1";
        argsInput[1] = "25";
        argsInput[2] = "PS6Test.in";
        try {
            TextGenerator.setSeed(100);
            TextGenerator.main(argsInput);
        } catch (Exception e) {
            e.printStackTrace();
        }
	}
}
