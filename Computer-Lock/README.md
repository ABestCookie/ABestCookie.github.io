# 電腦使用防止鎖 

> 一個暑假沒事做不好好準備模擬考的國三生做的鎖，簡直可以說是漏洞百出。

<img src="img\icon.png" alt="icon" style="zoom:300%;" />

**程式圖標，使用Windows 11的「本機」及 "Lock"圖標以Gimp合成，超棒的對吧**


> 請注意，本程式僅能跑在windows 系統上(建議Windows Vista sp1以上)

看名稱就知道，這玩意兒就是專門把你電腦鎖起來的程式，其實你只要使用Windows Cmd 執行以下命令一樣可以達成相同功能(指把桌面變黑(win10)的部分)。

```bat
taskkill  /f /im explorer.exe
```

這個程式簡單來講就是這個命令的GUI化(雖然我設計的ui特醜)，以及使用密碼來使這個指令變成一個貨價真實的鎖。(雖然好像沒啥用)

然後就是痾.... 好吧，應該沒甚麼好說的了，看圖吧。

<img src="img\about.png" alt="about" style="zoom:100%;" />

**此程式由ABestCookie(~~本大爺~~本人)撰寫，請自由~~使用~~ 吐槽**

```
電腦使用防止鎖 簡單、粗暴、強效   by ABestCookie
如果有空，不仿造訪一下: https://www.github.com/ABestCookie
運行系統:Windows (註:非Windows系統無法運行此程式) zh-TW mode
```

**CUI顯示文字(系統環境win10，台灣繁體中文模式)**

<img src="img\未命名.gif" alt="未命名" style="zoom:100%;" />

**程式UI主介面(呃我好像不太會做GIF動畫，好抖)**

<img src="img\setting.png" alt="未命名" style="zoom:80%;" />

**設定畫面+語言選單**

<img src="img\his.png" alt="his" style="zoom:100%;" />

**密碼歷史查看器**

然後....就沒有然後了，0.1而已你在期待什麼

# 👍🙂↕

然後其實我不懂這裡為啥要加一個變數

```python
def show(It_is_useless_but_it_need_to_stay_here):
      """^這裡"""
        global lg
        lg=open('resources/language.txt','w')
        lg.write(ListVariable.get())
        lg.close()
```

沒差，反正是Python Shell 講的，乾我der事