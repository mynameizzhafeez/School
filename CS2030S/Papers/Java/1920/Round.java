class Round implements TypeCaster<Double,Integer> {
  public Integer cast(Double d) {
    return (Integer) d;
  }
}
