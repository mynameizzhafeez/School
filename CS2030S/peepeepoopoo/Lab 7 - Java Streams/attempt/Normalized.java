public class Normalized {
	double count;
	double min;
	double max;
	double sum;

	public Normalized(double count, double min, double max, double sum) {
		this.count = count;
		this.min = min;
		this.max = max;
		this.sum = sum;
	}

	public Normalized update(Normalized other) {
		double newCount = count + 1;
		double newMin = Math.min(this.min, other.min);
		double newMax = Math.max(this.max, other.max);
		double newSum = this.sum + other.sum;
		return new Normalized(newCount, newMin, newMax, newSum);
	}

	public double getMean() {
		return (max - min == 0) ? 0.0 : ((sum / count) - min) / (max - min);
	}
}
