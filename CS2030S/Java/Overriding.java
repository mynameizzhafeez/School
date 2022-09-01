class ParentException extends Exception {}
class Parent<T> {
  private <R> Parent<R> foo(Parent<? extends T> p) throws ParentException {
    return null;
  }
  class Child<S> extends Parent<S> {
    @Override
    private <T> Parent<T> foo(Parent<? extends S> p) throws ParentException {
      return null;
    }
  }
}
