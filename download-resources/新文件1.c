#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h> // for atoi

int is_int(); // �ŧi�禡�쫬

int main()
{
    int sum = 0;
    printf("�D�w���P 1000000�A�n�R�X��");
    sum = is_int() * 1000000;
    printf("\n�`�@: %d", sum); // ��%d��X int
    //���ݥ��N��
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
        output = atoi(input);  // ��atoi�নint
        return output;
    } else {
        printf("is not int\n");
        return 0; // �Dint�N�^��0
    }
}

