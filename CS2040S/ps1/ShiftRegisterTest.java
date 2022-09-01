//import static org.junit.Assert.*;
//
//import org.junit.Test;
//
///**
// * ShiftRegisterTest
// * @author dcsslg
// * Description: set of tests for a shift register implementation
// */
//public class ShiftRegisterTest {
//
//    /**
//     * Returns a shift register to test.
//     * @param size
//     * @param tap
//     * @return a new shift register
//     */
//    ILFShiftRegister getRegister(int size, int tap){
//        return new ShiftRegister(size, tap);
//    }
//
//    /**
//     * Tests shift with simple example.
//     */
//    @Test
//    public void testShift1() {
//        ILFShiftRegister r = getRegister(9, 7);
//        int[] seed = {0,1,0,1,1,1,1,0,1};
//        r.setSeed(seed);
//        int[] expected = {1,1,0,0,0,1,1,1,1,0};
//        for (int i=0; i<10; i++){
//            assertEquals(expected[i], r.shift());
//        }
//    }
//
//    /**
//     * Tests generate with simple example.
//     */
//    @Test
//    public void testGenerate1() {
//        ILFShiftRegister r = getRegister(9, 7);
//        int[] seed = {0,1,0,1,1,1,1,0,1};
//        r.setSeed(seed);
//        int[] expected = {6,1,7,2,2,1,6,6,2,3};
//        for (int i=0; i<10; i++){
//            assertEquals("GenerateTest", expected[i], r.generate(3));
//        }
//    }
//
//    /**
//     * Tests register of length 1.
//     */
//    @Test
//    public void testOneLength() {
//        ILFShiftRegister r = getRegister(1, 0);
//        int[] seed = {1};
//        r.setSeed(seed);
//        int[] expected = {0,0,0,0,0,0,0,0,0,0,};
//        for (int i=0; i<10; i++){
//            assertEquals(expected[i], r.generate(3));
//        }
//    }
//
//    /**
//     * Tests with erroneous seed.
//     */
//    @Test
//    public void testError() {
//        ILFShiftRegister r = getRegister(4, 1);
//        int[] seed = {1,0,0,0,1,1,0};
//        r.setSeed(seed);
//        r.shift();
//        r.generate(4);
//    }
//    /**
//    There can be different types of error. If the size and the seed length are not the same,
//    the user should be advised on this. If the size is less than the seed length, there may not
//    even be an error as the indexing would still work regardless, so it is important to check
//    it as well.
//
//    There is also the issue of tap exceeding the size of the seed. So check whether tap is greater
//    than size.
//     */
//
//    /**
//     * Tests example given in pdf file
//     */
//    @Test
//    public void testPdfExample() {
//        ILFShiftRegister r = getRegister(8, 4);
//        int[] seed = {1,1,0,1,1,1,0,1};
//        r.setSeed(seed);
//        int[] expected = {0,1};
//        for (int i=0; i<2; i++){
//            assertEquals(expected[i], r.shift());
//        }
//    }
//
//    /**
//     * Tests alternating sequence
//     */
//    @Test
//    public void testAlternate() {
//        ILFShiftRegister r = getRegister(12,10);
//        int[] seed = {1,0,1,0,1,0,1,0,1,0,1,0};
//        r.setSeed(seed);
//        int[] expected = {1,1,1,1,1,1,1,1,1,1};
//        for (int i = 0; i < 10; ++i) {
//            assertEquals(expected[i], r.shift());
//        }
//    }
//
//    /**
//     * Tests self-referencing
//     */
//    @Test
//    public void testSelf() {
//        ILFShiftRegister r = getRegister(6, 5);
//        int[] seed = {1,1,0,1,0,0};
//        r.setSeed(seed);
//        int[] expected = {0,0,0,0,0,0,0,0,0,0,0,0,0,0};
//        for (int i = 0; i < 14; ++i) {
//            assertEquals(expected[i], r.generate(5));
//        }
//    }
//}
