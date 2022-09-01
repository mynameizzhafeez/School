class InvalidOperandException extends RuntimeException {
  public InvalidOperandException(char c) {
    super(String.format("ERROR: Invalid operand for operator %c", c));
  }
}
