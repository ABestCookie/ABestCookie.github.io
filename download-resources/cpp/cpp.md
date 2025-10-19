# C ++ 練習

> 對沒錯這是我的社課練習

## 10/17

題目 : https://atcoder.jp/contests/abc280/tasks/abc280_b
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

## 10/19

題目 : https://atcoder.jp/contests/abc059/tasks/abc059_b
```cpp
#include<iostream>
using namespace std;
#include<conio.h>
int main() {
    string a, b, sum;
    cin >> a >> b;
    if (a.size() < b.size()) {
        cout << "LESS" << endl;
    } else if (a.size() > b.size()) {
        cout << "GREATER" << endl;
    } else {
        for (int i = 0; i <= a.size(); i++) {
            if (a[i] < b[i]) {
                cout << "LESS" << endl; 
                break;
            } else if (a[i] > b[i]) {
                cout << "GREATER" << endl;
                break;
            } else {
                cout << "EQUAL" << endl;
                break;
            }
        }
    }
    _getch();
    return 0;
}
```
