class Operand<T> implements Expression<T> {
  T t;
  public Operand(Object t) {
    @SuppressWarnings("unchecked")
     T t2 = (T) t;
     this.t = t2;
  }
  public T eval() {
    return this.t;
  }
}
