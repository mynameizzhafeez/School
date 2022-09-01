class B extends A {
  @Override
  void foo(A a) {System.out.println("BA");}
  void foo(B a) {System.out.println("BB");}
  public B(int i) {
    super(i);
  }
}
