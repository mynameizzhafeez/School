public class SortingTester {
    public static boolean checkSort(ISort sorter, int size) {
        if (size > 0) {
            KeyValuePair[] testArray = new KeyValuePair[size];
            boolean ordered = true;
            for (int i = 0; i < size; i++) {
                int k = (int)(Math.random()*1000);
                int v = (int)(Math.random()*1000);
                testArray[i] = new KeyValuePair(k, v);
            }

            sorter.sort(testArray);

            for (int i = 0; i < size - 1; i++) {
                if (testArray[i].compareTo(testArray[i+1]) == 1) {
                    ordered = false;
                }
            }

            return ordered;
        } else {
            return true;
        }
    }

    public static boolean isStable(ISort sorter, int size) {
        if (size > 0) {
            KeyValuePair[] testArray = new KeyValuePair[size];
            boolean ordered = true;
            for (int i = 0; i < size; i++) {
                int k = (int) (Math.random() * 1000);
                int v = (int) (Math.random() * 1000);
                testArray[i] = new KeyValuePair(k, i);
            }
            sorter.sort(testArray);
            for (int i = 0; i < size - 1; i++) {
                if (testArray[i].getKey() == testArray[i + 1].getKey() && testArray[i].getValue() > testArray[i + 1].getValue()) {
                    ordered = false;
                }
            }
            return ordered;
        } else {
            return true;
        }

    }

    public static void main(String[] args) {
//        for (int i = 0; i < 100; i++) {
//            System.out.print(checkSort(new SorterA(), 10000));
//            System.out.print(checkSort(new SorterB(), 10000));
//            System.out.print(checkSort(new SorterC(), 10000));
//            System.out.print(checkSort(new SorterD(), 10000));
//            System.out.print(checkSort(new SorterE(), 10000));
//            System.out.print(checkSort(new SorterF(), 10000));
//            System.out.println("");
//        }
//        for (int i = 0; i < 100; i++) {
//            System.out.print(isStable(new SorterA(), 1000));
//            System.out.print(isStable(new SorterB(), 1000));
//            System.out.print(isStable(new SorterC(), 1000));
//            System.out.print(isStable(new SorterD(), 1000));
//            System.out.print(isStable(new SorterE(), 1000));
//            System.out.print(isStable(new SorterF(), 1000));
//            System.out.println("");
//        }
//        double times[] = new double[100];

        ISort sortObject = new SorterF();
        StopWatch watch = new StopWatch();

        for (int size = 10; size < 10001; size += 10) {

            KeyValuePair[] sortedArray = new KeyValuePair[size];
            for (int i = 0; i < size; i++) {
                sortedArray[i] = new KeyValuePair(i, i);
            }

            KeyValuePair[] unsortedArray = new KeyValuePair[size];
            for (int i = 0; i < size; i++) {
                int k = (int)(Math.random()*1000);
                unsortedArray[i] = new KeyValuePair(k, i);
            }

            KeyValuePair[] almostArray = new KeyValuePair[size];
            almostArray[size - 1] = new KeyValuePair(0,0);
            for (int i = 0; i < size - 1; i++) {
                almostArray[i] = new KeyValuePair(1, i);
            }

            double sortedTime = 0;
            for (int i = 0; i < 10; i++) {
                watch.start();
                sortObject.sort(sortedArray);
                watch.stop();
                sortedTime += watch.getTime();
                watch.reset();
            }

            double unsortedTime = 0;
            for (int i = 0; i < 10; i++) {
                watch.start();
                sortObject.sort(unsortedArray);
                watch.stop();
                unsortedTime += watch.getTime();
                watch.reset();
            }

            double almostTime = 0;
            for (int i = 0; i < 10; i++) {
                watch.start();
                sortObject.sort(almostArray);
                watch.stop();
                almostTime += watch.getTime();
                watch.reset();
            }

            System.out.println((double)(int)(almostTime * 1000 / sortedTime) / 1000);
//            System.out.println((double)(int)(unsortedTime*10000000) / 1000);
//            System.out.println((double)(int)(almostTime*10000000) / 1000);
        }
    }
}
