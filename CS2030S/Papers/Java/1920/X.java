class X {
  int x;
  public X(int x) {
    this.x = x;
  }
  @Override
  public String toString() {
    return String.format("X:%d",this.x);
  }
}
