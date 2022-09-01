class A {
  int counter;
  int[] content;
  public A(int i) {
    this.counter = 1;
    this.content = new int[this.counter];
    this.content[0] = i;
  }

  public A next(int i) {
    this.counter++;
    int[] temp = this.content;
    this.content = new int[this.counter];
    for (int j = 0; j < temp.length; j++) {
      this.content[j] = temp[j];
    }
    this.content[this.counter-1] = i;
    return this;
  }

  public String toString() {
    String toReturn = "";
    for (int i : content) {
      toReturn += String.format("[A:%d]",i);
    }
    return toReturn;
  }
}
