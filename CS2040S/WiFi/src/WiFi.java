import java.util.Arrays;

class WiFi {

    /**
     * Implement your solution here
     */
    public static double computeDistance(int[] houses, int numOfAccessPoints) {
        int len = houses.length;
        if (len <= 1) {
            return 0;
        } else if (coverable(houses, numOfAccessPoints, 0)) {
            return 0;
        } else {
            double M = 0.25;
            while (!coverable(houses, numOfAccessPoints, M)) {
                M *= 2;
            }
            double begin = M / 2;
            double end = M;
            System.out.println("Success");
            while (begin + 0.25 < end) {
                System.out.println(begin);
                double mid = begin + (end - begin) / 2;
                if (coverable(houses, numOfAccessPoints, mid)) {
                    end = mid;
                } else {
                    begin = mid + 0.5;
                }
            }
            return begin;
        }
    }

    /**
     * Implement your solution here
     */
    public static boolean coverable(int[] houses, int numOfAccessPoints, double distance) {
        Arrays.sort(houses);
        int ap = 0;
        int i = 0;
        int len = houses.length;
        double d = distance * 2;
        while (ap < numOfAccessPoints && i < len) {
            double start = houses[i];
            while (i < len) {
                if (houses[i] - start > d) {
                    break;
                } else {
                    i++;
                }
            }
            ap++;
        }
        return i == len;
    }

//    public static void main(String[] args) {
//        int[] houses = {1, 3, 10};
//        int numAccessPoints = 2;
//        System.out.println(computeDistance(houses, numAccessPoints));
//    }
}
