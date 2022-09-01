import java.util.ArrayList;
import java.util.List;

class ToList<T> implements TypeCaster<T[], List<T>> {
  public List<T> cast(T[] array) {
    List<T> L = (List<T>) new ArrayList<T>();
    for (T t : array) {
      L.add(t);
    }
    return L;
  }
}
