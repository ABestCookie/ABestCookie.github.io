<!-- tabs:start -->

#### **README.md**

# ASCII_art
> 拿來玩bad apple的地方

眾所周知bad apple的MV只要在可以被電訊號控制明暗的東西上都能被播放

---
這東西就是用來在終端小黑窗播放bad apple用的

<small>(當然你要拿來播其他東西也是可以的)</small>

## 原理

應該很容易理解吧，這東西不需要我多說

就是用cv2切偵+pillow轉灰階跟替換像素

## 食用方法

下載原始碼

然後修改一下 `main.py`裡面的這個部分

```python
if __name__ == "__main__":
    generate_ascii_animation(
        video_path="bad_apple.mp4",  # ← 替換成你的影片
        output_txt="ascii_animation.txt", #輸出檔案的位置(這邊是相對路徑，你也可以放絕對路徑)
        frame_width=240,    #生成字元畫的大小
        fps_skip=1,       # 每2幀擷取一次（加快轉換速度）
        max_frames=None    # 最多幾幀（None = 全部）
    )
```

> 如果需要從yt下載影片，我有放 `yt.py`，把裡面字串連結改成你要的連結就能用了
>
> 當然別忘記讓他跑起來
>
> ```
> python yt.py
> ```

然後配置一下你的環境

```batch
pip install -r requirements.txt
```

然後運行

**產生動畫**

```batch
python main.py
```
> 這邊在運行的時候，由於我沒做進度條，因此根據不同的電腦配置有可能會跑很久的時間

**播放動畫**

```batch
python play.py
```
> 你也可以運行 `play.exe` 不過動畫檔的名字需固定為 `ascii_animation.txt`


## Example flim

<iframe width="560" height="315" src="https://www.youtube.com/embed/YZyhZMwJDAI?si=0WBYOlKJcsteHcw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### **LICENSE**

```
MIT License

Copyright (c) 2025 cookie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
<!-- tabs:end -->
