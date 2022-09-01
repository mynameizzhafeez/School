import java.util.stream.Stream;
import java.util.stream.IntStream;
import java.util.function.IntFunction;
import java.util.Optional;
import java.util.Arrays;

public class Main {

    static boolean isPrime(int n) {
        return IntStream
            .range(2, n)
            .noneMatch(x -> n % x == 0);
    }

    static int[] twinPrimes(int n) {
        return IntStream.rangeClosed(3, n)
            .filter(each -> (isPrime(each) && isPrime(each + 2))
                         || (isPrime(each) && isPrime(each - 2)))
            .distinct()
            .toArray();
    }

    static int gcd(int m, int n) {
        return Stream.iterate(new Pair(m, n), 
                pair -> new Pair(pair.y, pair.x % pair.y))
            .filter(pair -> pair.x == 0 || pair.y == 0)
            .findFirst()
            .map(pair -> pair.x == 0 ? pair.y : pair.x)
            .get();
    }

    static long countRepeats(int... array) {
        return IntStream.range(0, array.length - 1)
            .filter(i ->
                    array[i] == array[i + 1]
                    && (i >= array.length - 2
                        || array[i] != array[i + 2]
                       )
                   )
            .count();
    }

    static double normalizedMean(Stream<Integer> stream) {
        return stream
            .map(num -> new StatTracker(num, num, num, 1))
            .reduce((res, each) -> res.updateStats(each))
            .orElse(StatTracker.empty())
            .calculateMean();
    }

}
