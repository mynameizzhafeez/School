public class FindKeysMinimumAttempts implements IFindKeys {

    public int[] replace(int[] array, int begin, int end, int with) {
        int[] A = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            A[i] = 1;
        }
        for (int i = begin; i < end + 1; i++) {
            A[i] = with;
        }
        return A;
    }

    public int[] check(int[] array, int N, int k, int begin, int end, ITreasureExtractor treasureExtractor) {
        int mid = (begin + end) / 2;
//        System.out.println(begin);
//        System.out.println(end);
        int[] A = replace(array, begin, end, 0);
        for (int i = 0; i < array.length; i ++) {
//            System.out.print(A[i]);
        }
//        System.out.println("");
        if (end - begin + 1 + k > N) {
//            System.out.println(begin);
//            System.out.println(mid);
//            System.out.println(end);
            int[] left = check(array, N, k, begin, mid, treasureExtractor);
            int[] right = check(array, N, k, mid + 1, end, treasureExtractor);
            int[] res = new int[left.length + right.length];
            for (int i = 0; i < left.length; i++) {
                res[i] = left[i];
            }
            for (int i = 0; i < right.length; i++) {
                res[i + left.length] = right[i];
            }
            return res;
        } else if (treasureExtractor.tryUnlockChest(A)) {
            return new int[] {};
        } else if (begin == end){
            return new int[] {begin};
        } else {
            int[] left = check(array, N, k, begin, mid, treasureExtractor);
            int[] right = check(array, N, k,mid + 1, end, treasureExtractor);
            int[] res = new int[left.length + right.length];
            for (int i = 0; i < left.length; i++) {
                res[i] = left[i];
            }
            for (int i = 0; i < right.length; i++) {
                res[i + left.length] = right[i];
            }
            return res;
        }
    }

    @Override
    public int[] findKeys(int N, int k, ITreasureExtractor treasureExtractor) {
        // TODO: Problem 1 -- Implement strategy to find correct keys with minimum attempts
        int[] start = new int[N];
        for (int i = 0; i < N; i++) {
            start[i] = 1;
        }
        int[] res = check(start, N, k, 0, N - 1, treasureExtractor);
        for (int i = 0; i < N; i++) {
            start[i] = 0;
        }
        for (int i = 0; i < res.length; i++) {
            start[res[i]] = 1;
        }
//        for (int i = 0; i < start.length; i ++) {
//            System.out.print(start[i]);
//        }
        return start;
    }
}
