class Concatenation extends Operation<String> {
  public Concatenation(Expression first, Expression second) {
    this.setFirst(first);
    this.setSecond(second);
  }
  public String eval() {
    return String.format("%s%s", this.getFirst().eval(), this.getSecond().eval());
  }
}
