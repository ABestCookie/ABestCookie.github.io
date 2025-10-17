# C ++ 練習

> 對沒錯這是我的社課練習

題目 : [B - Inverse Prefix Sum]("https://atcoder.jp/contests/abc280/tasks/abc280_b")
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    
    int a, b, out, length;
    cin >> length;
    cin >> a;
    cout << a << " ";
    for (int i=0; i<=length - 2; i++) {
        cin >> b;
        cout << b - a << " ";
        a = b;
    }
    return 0;
}
```
