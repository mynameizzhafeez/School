import java.util.*;

class Testing {
  static class A {
    public A() {}
    void f(double i, int j) {
      System.out.print(1);
    }
  }
  static class B extends A {
    public B() {}
    void f(int i, double j) {
      System.out.print(2);
    }
  }
  public static void main(String[] args) {
    B b = new B();
    b.f(1,1);
    // Ambiguous call;
  }
}
