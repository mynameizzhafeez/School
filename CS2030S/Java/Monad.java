import java.util.function.Function;

class Monad<T> {
  private T x;
  private Monad(T x) {
    this.x = x;
  }
  public static <T> Monad<T> of(T x) {
    return new Monad<>(x);
  }
  public T get() {
    return x;
  }
  public <R> Monad<R> flatMap(Function<? super T, ? extends Monad<? extends R>> f) {
    return new Monad<>(f.apply(this.x).get());
  }
  public <R> Monad<R> map(Function<? super T, ? extends R> f) {
    return this.flatMap(x -> Monad.of(f.apply(this.x)));
  }
}
