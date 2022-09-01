class B {
  String s;
  public B() {
    this.s = "B";
  }
  public B add(B b) {
    this.s += b.s;
    return this;
  }
  public B add(C c) {
    this.s += c.s;
    return this;
  }
  @Override
  public String toString() {
    return this.s;
  }
}
