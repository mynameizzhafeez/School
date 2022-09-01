class Sorter {

    public static void merge(String[] arr, int low, int mid, int high) {

        int n1 = mid - low + 1;
        int n2 = high - mid;

        String Low[] = new String[n1];
        String High[] = new String[n2];

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
//            System.out.print(Low[l]);
//            System.out.print(" ");
//            System.out.print(High[h]);
//            System.out.println("");
            if (!isGreaterThan(Low[l], High[h])) {
//                System.out.println(Low[l]);
                arr[c] = Low[l];
//                System.out.println(arr[c]);
                l++;
            } else {
//                System.out.println(High[h]);
                arr[c] = High[h];
//                System.out.println(arr[c]);
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

//        for (int i = 0; i < arr.length; i++) {
//            System.out.print(arr[i]);
//        }
    }

    public static void mergeSort(String arr[], int low, int high) {

        if (low < high) {

            int mid = low + (high - low) / 2;

            mergeSort(arr, low, mid);
            mergeSort(arr, mid + 1, high);

            merge(arr, low, mid, high);

        }

    }

    public static void sortStrings(String[] arr) {

        int low = 0;
        int high = arr.length - 1;

        mergeSort(arr, low, high);

    }

    public static boolean isGreaterThan(String str1, String str2) {

        if (str1.length() < 2 || str2.length() < 2) {

            return str1.compareTo(str2) > 0;

        } else {

            String first1 = str1.substring(0, 2);
            String first2 = str2.substring(0, 2);

            return first1.compareTo(first2) > 0;

        }

    }

    public static void main(String[] args) {
        System.out.println(isGreaterThan("ac","ac"));
    }
}
