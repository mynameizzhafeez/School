public class StatTracker {

    final int min;
    final int max;
    final int sum;
    final int count;
    
    public StatTracker(int min, int max, int sum, int count) {
        this.min = min;
        this.max = max;
        this.sum = sum;
        this.count = count;
    }

    public static StatTracker empty() {
        return new StatTracker(0, 0, 0, 0);
    }

    public StatTracker updateStats(StatTracker next) {
        int newMin = this.min <= next.min ? this.min : next.min;
        int newMax = this.max >= next.max ? this.max : next.max;
        int newSum = this.sum + next.sum;
        int newCount = this.count + 1;
        return new StatTracker(newMin, newMax, newSum, newCount);
    }

    public double calculateMean() {
        double numerator = (sum / ((double)count)) - min;
        int denominator = max - min;
        return max - min == 0
            ? 0.0
            : numerator / denominator;
    }

}
