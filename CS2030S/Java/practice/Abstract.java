class Abstract {
  
  abstract class A {
    public abstract void f();
  }

  public class B extends A {
    public B() {}
    public void f() {}
  }

  public static void main(String[] args) {
    B b = new B();
  }

}
