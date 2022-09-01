/**
 * The Optimization class contains a static routine to find the maximum in an array that changes direction at most once.
 */
public class Optimization {

    /**
     * A set of test cases.
     */
    static int[][] testCases = {
            {1, 3, 5, 7, 9, 11, 10, 8, 6, 4},
            {67, 65, 43, 42, 23, 17, 9, 100},
            {4, -100, -80, 15, 20, 25, 30},
            {2, 3, 4, 5, 6, 7, 8, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83}
    };

    /**
     * Returns the maximum item in the specified array of integers which changes direction at most once.
     *
     * @param dataArray an array of integers which changes direction at most once.
     * @return the maximum item in data Array
     */
    public static int searchMax(int[] dataArray) {
        int L = dataArray.length;
        if (L == 0) {
            System.out.println("Array is empty. Try again.");
            return 0;
        } else if (L == 1) {
            return dataArray[0];
        } else {
            // Find direction at front (1 for increasing, -1 for decreasing, 0 for constant)
            int first = dataArray[0];
            int i = 1;
            int direction = 0;
            while (i < L) {
                if (dataArray[i] == first) {
                    i++;
                } else if (dataArray[i] < first) {
                    direction = -1;
                    break;
                } else {
                    direction = 1;
                    break;
                }
            }
            if (direction == 0) {
                return dataArray[0];
            } else if (direction == -1) {
                // If initial direction is decreasing, then compare the first and last entries
                // O(1) time
                return Math.max(first, dataArray[L - 1]);
            } else {
                int begin = 0;
                int end = L - 1;
                while (begin < end) {
                    int mid = begin + (end - begin) / 2;
                    if (dataArray[mid] < dataArray[mid + 1]) {
                        begin = mid + 1;
                    } else {
                        end = mid;
                    }
                }
                return dataArray[begin];
            }
        }
    }

    /**
     * A routine to test the searchMax routine.
     */
    public static void main(String[] args) {
        for (int[] testCase : testCases) {
            System.out.println(searchMax(testCase));
        }
    }
}
