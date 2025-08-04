＃ 檔案下載

| file | link | SHA-256 |
| :--: | :--: | :--: |
| **chilledwindows.exe** | [Google Drive](https://drive.google.com/file/d/1UVGMyD49icI6YIHVIH9If4VURM9r0lbE/view?usp=sharing) | ccb9502bf8ba5becf8b758ca04a5625c30b79e2d10d2677cc43ae4253e1288ec |
| **MC-edu-installer.exe** | [Download](/download-resources/MC-edu-installer.exe |

## 驗證檔案安全性(檢查哈希值)

<input type="file" id="fileInput">
<p>哈希值: <span id="hashOutput"></span></p>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const hashOutput = document.getElementById('hashOutput');
    const container = document.createElement('div');
    
    // 設置基本樣式
    container.style.textAlign = 'center';
    container.style.marginTop = '20px';
    document.body.appendChild(container);
    
    fileInput.style.display = 'block';
    fileInput.style.margin = '10px auto';
    
    const button = document.createElement('button');
    button.textContent = 'Choose File';
    button.style.padding = '10px 15px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.onclick = () => fileInput.click();
    container.appendChild(button);
    
    const resultBox = document.createElement('div');
    resultBox.style.marginTop = '15px';
    resultBox.style.padding = '10px';
    resultBox.style.border = '1px solid #ccc';
    resultBox.style.borderRadius = '5px';
    resultBox.style.display = 'inline-block';
    container.appendChild(resultBox);
    
    hashOutput.style.display = 'block';
    hashOutput.style.fontSize = '14px';
    hashOutput.style.marginTop = '5px';
    resultBox.appendChild(hashOutput);
    
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) {
            alert("You didn't choose any file");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            crypto.subtle.digest('SHA-256', e.target.result)
                .then(hashBuffer => {
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                    console.log(hashHex);
                    hashOutput.textContent = `SHA-256: ${hashHex}`;
                })
                .catch(err => console.error(err));
        };
        
        reader.readAsArrayBuffer(file);
    });
});

</script>

**或著你可以造訪我10分鐘寫出來的網頁**[點我](https://abestcookie.github.io/hash-check/)



