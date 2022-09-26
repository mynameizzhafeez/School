#include <stdio.h>
#include <string.h>

// DO NOT define additional functions or constants.

#define MASK    0b10000000
#define LSB     0b00000001


// Prints the bits in c. Do not change this.
void print_bits(char c) {

    for(int i=0; i<8; i++) {
        if(c & MASK)
            printf("1");
        else
            printf("0");
        c <<= 1;
    }

    printf("\n");
}

// Implement this function. buffer = Buffer of char
// len = # of char in buffer. odd = 1 Set bit
// 7 of each eleement of buffer according to the rules
// of odd parity. odd = 0 Set bit 7 of each element of buffer
// according to the rules of even parity.

void set_parity(char *buffer, int len, int odd) {
  for (int i=0; i<len; i++) {
    char c = buffer[i];
    char c_cpy = c; // Gets rid of the first digit
    int count = 0;
    int j = 0;
    while (j < 8) {
      if (c_cpy & MASK) { // MSB is 1
        count++;
      }
      c_cpy <<= 1;
      j++;
    }

    printf("%d\n", count);
    
    if (((count % 2) && !odd) || (!(count % 2) && odd)) {
      buffer[i] = c | MASK;
    } else {
      buffer[i] = c;
    }
  }
}

// Do not change this
int main() {
    char x[] = "abcdefg";

    set_parity(x, strlen(x), 1);

    for(int i=0; i<strlen(x); i++)
        print_bits(x[i]);
}

