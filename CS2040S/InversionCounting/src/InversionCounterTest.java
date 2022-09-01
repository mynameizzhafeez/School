import org.junit.Test;

import static org.junit.Assert.*;

public class InversionCounterTest {

    @Test
    public void countSwapsTest1() {
        int[] arr = {3, 1, 2};
        assertEquals(2L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void countSwapsTest2() {
        int[] arr = {2, 3, 4, 1};
        assertEquals(3L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void countSwapsTest3() {
        int[] arr = {1};
        assertEquals(0L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void countSwapsTest4() {
        int[] arr = {};
        assertEquals(0L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void countSwapsTest5() {
        int[] arr = {-1, 1, -2};
        assertEquals(2L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void countSwapsTest6() {
        int[] arr = {8, 22, 7, 9, 31, 19, 5, 13};
        assertEquals(14L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void countSwapsTest7() {
        int[] arr = {3, 2, 2, 1, 1, 1, 3};
        assertEquals(11L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void countSwapsTest8() {
        int[] arr = {4,2,3,1};
        assertEquals(5L, InversionCounter.countSwaps(arr));
    }

    @Test
    public void mergeAndCountTest1() {
        int[] arr = {3, 1, 2};
        assertEquals(2L, InversionCounter.mergeAndCount(arr, 0, 0, 1, 2));
    }

    @Test
    public void mergeAndCountTest2() {
        int[] arr = {2, 3, 4, 1};
        assertEquals(3L, InversionCounter.mergeAndCount(arr, 0, 2, 3, 3));
    }

    @Test
    public void mergeAndCountTest3() {
        int[] arr = {2, 3, 4, 5};
        assertEquals(0L, InversionCounter.mergeAndCount(arr, 0, 2, 3, 3));
    }

    @Test
    public void mergeAndCountTest4() {
        int[] arr = {4, 5, 2, 3};
        assertEquals(4L, InversionCounter.mergeAndCount(arr, 0, 1, 2, 3));
    }

    @Test
    public void mergeAndCountTest5() {
        int[] arr = {4};
        assertEquals(0L, InversionCounter.mergeAndCount(arr, 0, 0,0,0));
    }

    @Test
    public void mergeAndCountTest6() {
        int[] arr = {1, 1, 1, 1};
        assertEquals(0L, InversionCounter.mergeAndCount(arr, 0, 0,1,3));
    }

    @Test
    public void mergeAndCountTest7() {
        int[] arr = {};
        assertEquals(0L, InversionCounter.mergeAndCount(arr, 0, 0,0,0));
    }
}