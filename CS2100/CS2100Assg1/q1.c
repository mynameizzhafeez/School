#include <stdio.h>
#define M 0b10000000

#define L   5

int mystery(char *x, int y) {
    int a = 0, b = 0, r = 0, d = 0;

    while(b < y) {
        char c = x[b];

        d=0;

        while(d < 8) {

            if(!(c & M) && a) {
                if(a > r)
                    r = a;

                a = 0;
            }

            while(!(c & M) && (d<8)){
                c <<= 1;
                d++;
            }

            while((d<8) && (c & M)){
                a++;
                c <<= 1;
                d++;
            }

        };

        b++;
    }

    if(a > r)
        r = a;

    return r;
}

int main() {
    char t[L] = {51, -29, 63, -9, -1};
    int v = mystery(t, L);
    printf("%d\n", v);
}

