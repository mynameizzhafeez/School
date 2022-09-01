class C {
  String s;
  public C() {
    this.s = "C";
  }
  public C add(B b) {
    this.s += b.s;
    return this;
  }
  public C add(C c) {
    this.s += c.s;
    return this;
  }
  @Override
  public String toString() {
    return this.s;
  }
}
