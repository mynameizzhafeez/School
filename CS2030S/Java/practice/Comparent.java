class Comparent implements Comparable<Comparent> {
  int value;
  public Comparent(int value) {
    this.value = value;
  }
  @Override
  public int compareTo(Comparent c) {
    return this.value < c.value ? -1
             : this.value == c.value ? 0
             : 1;
  }
}
