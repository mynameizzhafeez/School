class XOR extends Operation<Boolean> {
  public XOR(Expression first, Expression second) {
    this.setFirst(first);
    this.setSecond(second);
  }
  public Boolean eval() {
    boolean b1 = this.getFirst().eval();
    boolean b2 = this.getSecond().eval();
    return b1 ? !b2 : b2;
  }
}
