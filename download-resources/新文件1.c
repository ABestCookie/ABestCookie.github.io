#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h> // for atoi

int is_int(); // 宣告函式原型

int main()
{
    int sum = 0;
    printf("非洲之星 1000000，要買幾個");
    sum = is_int() * 1000000;
    printf("\n總共: %d", sum); // 用%d輸出 int
    //等待任意鍵
    printf("\npass any key to continue......");
    getchar();
    return 0;
}

int is_int()
{
    char input[100];
    int isnum = 1;
    int i;
    int output = 0;

    printf("\nplease entry any number:");
    fgets(input, sizeof(input), stdin);
    input[strcspn(input, "\n")] = 0;

    for (i = 0; input[i] != '\0'; i++) {
        if (i == 0 && input[i] == '-') continue;
        if (!isdigit(input[i])) {
            isnum = 0;
            break;
        }
    }

    if (isnum) {
        printf("is int\n");
        output = atoi(input);  // 用atoi轉成int
        return output;
    } else {
        printf("is not int\n");
        return 0; // 非int就回傳0
    }
}

