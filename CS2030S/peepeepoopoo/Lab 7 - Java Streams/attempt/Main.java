import java.util.stream.Stream;
import java.util.stream.IntStream;
import java.util.Optional;

class Main {
	static boolean isPrime(int n) {
		return IntStream
				.range(2, n)
				.noneMatch(x -> n % x == 0);
	}

	static int[] twinPrimes(int n) {
		return IntStream
				.rangeClosed(3, n)
				.filter(x -> (isPrime(x) && isPrime(x + 2))
									|| (isPrime(x) && isPrime(x - 2)))
				.toArray();
	}

	static int gcd(int m, int n) {
		return Stream.iterate(new Pair(m,n)
				, pair -> new Pair(pair.getTail()
						, pair.getHead() % pair.getTail()))
				.filter(pair -> pair.getHead() == 0 || pair.getTail() == 0)
				.findFirst()
				.map(pair -> pair.getHead() == 0 
						? pair.getTail() 
						: pair.getHead())
				.get();
	}

	static long countRepeats(int... arr) {
		return IntStream.range(0, arr.length - 1)
				.filter(i -> arr[i] == arr[i + 1] && (i >= arr.length - 2 || arr[i] != arr[i + 2]))
				.count();
	}

	static double normalizedMean(Stream<Integer> stream) {
		return stream.map(x -> new Normalized(1, x, x, x))
				.reduce((x, y) -> x.update(y))
				.map(x -> x.getMean())
				.orElse(0.0);
	}
}
