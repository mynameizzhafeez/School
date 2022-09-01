import java.util.function.Function;
class Sure<T> {
  private T x;
  private Sure(T x) {
    this.x = x;
  }
  public static <T> Sure<T> of(T x) {
    return new Sure<T>(x);
  }
  public <R> Sure<R> map(Function<T, R> f) {
    return null;
  }
}
