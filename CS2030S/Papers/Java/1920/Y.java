class Y {
  X x;
  public Y(X x) {
    this.x = x;
  }
  @Override
  public String toString() {
    return String.format("Y->%s",this.x.toString());
  }
}
