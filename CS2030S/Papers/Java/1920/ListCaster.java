import java.util.List;
import java.util.ArrayList;

class ListCaster {
  public static <S, T> List<T> castList(List<S> list, TypeCaster<? super S,? extends T> tc) {
    List<T> tList = (List<T>) new ArrayList<T>(list.size());
    for (int i = 0; i < list.size(); i++) {
      tList.add(tc.cast(list.get(i)));
    }
    return tList;
  }
}
