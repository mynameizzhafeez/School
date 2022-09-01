import java.util.List;

class D {
  public static <T> List<T> add(List<T> list, T t) {
    list.add(t);
    return list;
  }
  public static <T> List<T> join(List<T> list, List<? extends T> t) {
    for (int i = 0; i < t.size(); i++) {
      list.add(t.get(i));
    }
    return list;
  }
}
