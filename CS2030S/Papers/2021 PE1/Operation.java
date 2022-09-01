abstract class Operation<T> implements Expression<T> {
  private Expression<T> first;
  private Expression<T> second;
  public static Object of(char c, Expression first, Expression second) {
    if (c == '*') {
      return new Multiplication(first, second);
    } else if (c == '+') {
      return new Concatenation(first, second);
    } else if (c == '^') {
      return new XOR(first, second);
    } else {
      return null;
    }
  }
  public void setFirst(Expression first) {
    @SuppressWarnings("unchecked")
    Expression<T> f = (Expression<T>) first;
    this.first = f;
  }
  public void setSecond(Expression second) {
    @SuppressWarnings("unchecked")
    Expression<T> s = (Expression<T>) second;
    this.second = s;
  }
  public Expression<T> getFirst() {
    return this.first;
  }
  public Expression<T> getSecond() {
    return this.second;
  }
  public abstract T eval();
}
