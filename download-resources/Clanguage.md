# C 語言練習

> 對沒錯這是我的電腦作業

*9/8*

scanf資料輸入及運算練習

```c
#include<stdio.h>
int main()
{
	float a=10;
	float b;
	float ans;
	printf("please entry any number:");
	scanf("%f", &b);
	ans = a * b;
	printf("\nthe answer is %f", ans);
	//等待任意鍵
	printf("\npass any key to continue......");
	_getch();
	return ans;
}
```
