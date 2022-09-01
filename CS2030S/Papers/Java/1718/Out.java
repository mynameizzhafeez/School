class Out {
  int x;

  class In {
    int y;
  }

  void foo(int z) {
    x=1;
    z=1;
    class Local extends In {
      void bar() {
        int w;
        w=x;
        w=y;
        //w=z;
      }
    }
  }
}
