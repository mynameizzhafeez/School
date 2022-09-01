///////////////////////////////////
// This is the main shift register class.
// Notice that it implements the ILFShiftRegister interface.
// You will need to fill in the functionality.
///////////////////////////////////

/**
 * class ShiftRegister
 * @author
 * Description: implements the ILFShiftRegister interface.
 */

public class ShiftRegister implements ILFShiftRegister {
    ///////////////////////////////////
    // Create your class variables here
    ///////////////////////////////////
    int[] regSeed;
    int regSize;
    int regTap;

    ///////////////////////////////////
    // Create your constructor here:
    ///////////////////////////////////
//    ShiftRegister(int size, int tap) {
//        regSize = size;
//        regTap = tap;
//    }
    ShiftRegister() {
        // Nothing
    }

    ///////////////////////////////////
    // Create your class methods here:
    ///////////////////////////////////
    /**
     * setSeed
     * @param seed
     * Description: sets the value of the regSeed to be the parameter
     */
    @Override
    public void setSeed(int[] seed) {
        regSeed = seed;
    }

    /**
     * shift
     * @return
     * Description:
     */
    @Override
    public int shift() {
        int[] temp = new int[regSize];
        for (int i = 0; i < regSize - 1; ++i) {
            temp[i + 1] = regSeed[i];
        }

        temp[0] = regSeed[regSize - 1] ^ regSeed[regTap];
        regSeed = temp;
//        System.out.println(temp[0]);
        return temp[0];
    }

    /**
     * generate
     * @param k
     * @return decimal form of the binary number obtained through shifting
     * Description: shift multiple times and store each value in result
     */
    @Override
    public int generate(int k) {
        int[] result = new int[k];
        for (int i = 0; i < k; ++i) {
            result[i] = shift();
        }
        return toBinary(result);
    }

    /**
     * Returns the integer representation for a binary int array.
     * @param array
     * @return weighted sum of every entry of the array based on their index
     */
    private int toBinary(int[] array) {
        int sum = 0;
        for (int i = 0; i < array.length; ++i) {
            sum += Math.pow(2, array.length - i - 1) * array[i];
        }
        return sum;
    }

    public static void main(String args[]) {
        /**
         * When we take tap to be size - 1, we are actually applying XOR to two instances of the most significant digit.
         * Since this will always be the same, the value of XOR will be 0
         */

        ILFShiftRegister obj = new ShiftRegister();

//        ShiftRegister sample = new ShiftRegister(17, 16);
//        int[] seed = {0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1};
//        sample.setSeed(seed);
//        double sum = 0;
//
//        for (int i = 0; i < 400; ++i) {
//            int res = sample.shift();
//            sum += res;
//            System.out.print(res);
//        }
//
//        System.out.println("");
//        System.out.print("Average is: ");
//        System.out.println(sum / 400);
//
//        /**
//         * Otherwise, even if we take the other special values like the least significant digit or the center values,
//         * we would still get a reasonable output
//         */
//        ShiftRegister sample2 = new ShiftRegister(17, 0);
//        int[] seed2 = {0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1};
//        sample2.setSeed(seed2);
//        double sum2 = 0;
//
//        for (int i = 0; i < 400; ++i) {
//            int res = sample2.shift();
//            sum2 += res;
//            System.out.print(res);
//        }
//
//        System.out.println("");
//        System.out.print("Average is: ");
//        System.out.println(sum2 / 400);
//
//        ShiftRegister sample3 = new ShiftRegister(17, 8);
//        int[] seed3 = {0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1};
//        sample3.setSeed(seed3);
//        double sum3 = 0;
//
//        for (int i = 0; i < 400; ++i) {
//            int res = sample3.shift();
//            sum3 += res;
//            System.out.print(res);
//        }
//
//        System.out.println("");
//        System.out.print("Average is: ");
//        System.out.println(sum3 / 400);
//
//        /**
//         * It is also seen that with lower sizes, the pattern tends to repeat much faster regardless of
//         * what tap we choose. This is likely because there is not much information in the seed to begin with
//         * to draw out a more complex pattern.
//         */
//        ShiftRegister sample4 = new ShiftRegister(3, 1);
//        int[] seed4 = {0,1,0};
//        sample4.setSeed(seed4);
//        double sum4 = 0;
//
//        for (int i = 0; i < 400; ++i) {
//            int res = sample4.shift();
//            sum4 += res;
//            System.out.print(res);
//        }
//
//        System.out.println("");
//        System.out.print("Average is: ");
//        System.out.println(sum4 / 400);
//
//        /**
//         * In the case of alternating seed, the initial few values will be repeated, but after a while, it starts
//         * to become more reasonable, but still not random enough
//         */
//        ShiftRegister sample5 = new ShiftRegister(16, 14);
//        int[] seed5 = {1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0};
//        sample5.setSeed(seed5);
//        double sum5 = 0;
//
//        for (int i = 0; i < 400; ++i) {
//            int res = sample5.shift();
//            sum5 += res;
//            System.out.print(res);
//        }
//
//        System.out.println("");
//        System.out.print("Average is: ");
//        System.out.println(sum5 / 400);
//
//    }
//    public int[] converter(String passcode) {
//        char[] passcodeChars = passcode.toCharArray();
//        int[] result = new int[] {};
//        for (int i = 0; i < passcode.length(); ++i) {
//            String binaryString = Integer.toBinaryString(passcodeChars[i]);
//            char[] binaryArray = binaryString.toCharArray();
//            for (int j = 0; j < 8; ++j) {
//                result[i * 8 + j] = binaryArray[j];
//            }
//        }
//        return result;
//    }
    }
}




