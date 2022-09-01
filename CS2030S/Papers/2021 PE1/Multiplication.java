class Multiplication extends Operation<Integer> {
  public Multiplication(Expression first, Expression second) {
    this.setFirst(first);
    this.setSecond(second);
  }
  public Integer eval() {
    return this.getFirst().eval() * this.getSecond().eval();
  }
}
