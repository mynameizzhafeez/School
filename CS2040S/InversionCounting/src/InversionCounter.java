class InversionCounter {

    public static long merge(int[] arr, int low, int mid, int high) {

        long result = 0;

        int n1 = mid - low + 1;
        int n2 = high - mid;

        int Low[] = new int[n1];
        int High[] = new int[n2];

        for (int i = 0; i < n1; i++) {
            Low[i] = arr[low + i];
        }

        for (int i = 0; i < n2; i++) {
            High[i] = arr[mid + i + 1];
        }

        int l = 0;
        int h = 0;
        int c = low;
        while (l < n1 && h < n2) {
            if (Low[l] <= High[h]) {
                arr[c] = Low[l];
                l++;
            } else {
                result += n1 - l;
                arr[c] = High[h];
                h++;
            }
            c++;
        }

        while (l < n1) {
            arr[c] = Low[l];
            l++;
            c++;
        }

        while (h < n2) {
            arr[c] = High[h];
            h++;
            c++;
        }

        return result;
    }

    public static long mergeSort(int[] arr, int low, int high) {

        if (low < high) {

            int mid = low + (high - low) / 2;
            long left = mergeSort(arr, low, mid);
            long right = mergeSort(arr, mid + 1, high);
            long current = merge(arr, low, mid, high);
            return left + right + current;

        } else {
            return 0L;
        }

    }

    public static long countSwaps(int[] arr) {

        int low = 0;
        int high = arr.length - 1;
        return mergeSort(arr, low, high);

    }

    /**
     * Given an input array so that arr[left1] to arr[right1] is sorted and arr[left2] to arr[right2] is sorted
     * (also left2 = right1 + 1), merges the two so that arr[left1] to arr[right2] is sorted, and returns the
     * minimum amount of adjacent swaps needed to do so.
     */
    public static long mergeAndCount(int[] arr, int left1, int right1, int left2, int right2) {
        if (arr.length < 1) {
            return 0L;
        } else {
            long total = 0;
            while (left2 <= right2 && left1 <= right2) {
                if (arr[left1] <= arr[left2]) {
                    left1 += 1;
                } else {
                    int toMove = arr[left2];
                    for (int i = right1; i >= left1; i--) {
                        arr[i + 1] = arr[i];
                        total += 1;
                    }
                    arr[left1] = toMove;
                    left1 += 1;
                    right1 += 1;
                    left2 += 1;
                }
            }
            return total;
        }
    }
}
