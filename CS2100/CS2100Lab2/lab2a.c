#include <stdio.h>

void display(int);

int main() {
	int ageArray[4] = { 2, 15, 4 };
	display(ageArray[0]);
  printf("Size of the array is %ld\n", sizeof(ageArray)/sizeof(int));
	return 0;
}

void display(int age) {
	printf("%d\n", age);
}
