import java.util.Comparator;
import java.util.stream.IntStream;
import java.util.stream.Stream;

/**
 * @author Kevin Lim
 */
public class Main {

    public static int[] twinPrimes(int n) {
        return IntStream.rangeClosed(0, n).filter(x -> isPrime(x) && isPrime(x + 2)).toArray();
    }

    private static boolean isPrime(int n) {
        return n >= 2 && IntStream.rangeClosed(2, n - 1).noneMatch(x -> n % x == 0);
    }

    public static int gcd(int m, int n) {
        return Stream.iterate(new Tuple(m, n), x -> x.getSecond() != 0, x -> new Tuple(x.getSecond(), x.getFirst() % x.getSecond()))
                .sorted(Comparator.comparingInt(Tuple::getFirst))
                .findFirst()
                .get().getSecond();
    }

    public static long countRepeats(int... array) {
        return IntStream.rangeClosed(1, array.length - 1)
                .filter(x -> array[x] == array[x - 1] && (x == array.length - 1 || array[x] != array[x + 1]))
                .count();
    }

    public static double normalizedMean(Stream<Integer> stream) {
        return stream.map(x -> new Normalized(x)).reduce((x, y) -> x.operation(y))
                .map(x -> x.getMean()).orElse(0.0);
    }

}

