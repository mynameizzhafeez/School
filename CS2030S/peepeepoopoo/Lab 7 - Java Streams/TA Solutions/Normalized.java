/**
 * @author Kevin Lim
 */
public class Normalized {

    private final int count;
    private final int sum;
    private final int max;
    private final int min;

    private Normalized(int count, int sum, int max, int min) {
        this.count = count;
        this.sum = sum;
        this.max = max;
        this.min = min;
    }

    public Normalized(int n) {
        count = 1;
        sum = max = min = n;
    }

    public Normalized operation(Normalized other) {
        return new Normalized(
                this.count + other.count, this.sum + other.sum, Math.max(this.max, other.max),
                Math.min(this.min, other.min)
        );
    }

    public double getMean() {
        if (max - min == 0) {
            return 0.0;
        } else {
            return ((1.0 * sum / count) - min) / (max - min);
        }
    }

}

