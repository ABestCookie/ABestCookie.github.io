// --- 時鐘元件邏輯 ---
const widget = document.getElementById('widget');
const dragHandle = document.getElementById('drag-handle');
const resizer = document.getElementById('resizer');

dragHandle.onmousedown = function (e) {
    let shiftX = e.clientX - widget.getBoundingClientRect().left;
    let shiftY = e.clientY - widget.getBoundingClientRect().top;

    function onMouseMove(e) {
        let x = e.pageX - shiftX;
        let y = e.pageY - shiftY;
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        let maxX = window.innerWidth - widget.offsetWidth;
        let maxY = window.innerHeight - widget.offsetHeight;
        if (x > maxX) x = maxX;
        if (y > maxY) y = maxY;
        widget.style.left = x + 'px';
        widget.style.top = y + 'px';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    };
};

resizer.onmousedown = function (e) {
    e.preventDefault();
    const startWidth = widget.offsetWidth;
    const startHeight = widget.offsetHeight;
    const startX = e.clientX;
    const startY = e.clientY;

    function doResize(e) {
        const newWidth = startWidth + (e.clientX - startX);
        const newHeight = startHeight + (e.clientY - startY);
        const maxWidth = window.innerWidth - widget.offsetLeft;
        const maxHeight = window.innerHeight - widget.offsetTop;
        if (newWidth > 260 && newWidth < maxWidth) widget.style.width = newWidth + 'px';
        if (newHeight > 140 && newHeight < maxHeight) widget.style.height = newHeight + 'px';
    }
    function stopResize() {
        document.removeEventListener('mousemove', doResize);
        document.removeEventListener('mouseup', stopResize);
    }
    document.addEventListener('mousemove', doResize);
    document.addEventListener('mouseup', stopResize);
};

function updateClock() {
    const now = new Date();
    document.getElementById('time').innerText = now.toTimeString().split(' ')[0];
    document.getElementById('date').innerText = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// --- 背景切換函數 ---
function changeBG(imgPath) {
    document.body.style.backgroundImage = `url(${imgPath})`;
}

// --- 音樂播放器懸浮窗邏輯 ---
const pWidget = document.getElementById('player-widget');
const pDragHandle = document.getElementById('player-drag-handle');
const pResizer = document.getElementById('player-resizer');

// 拖拽功能
pDragHandle.onmousedown = function (e) {
    if (e.target !== pDragHandle) return;
    let sX = e.clientX - pWidget.offsetLeft;
    let sY = e.clientY - pWidget.offsetTop;
    document.onmousemove = (ev) => {
        let x = ev.pageX - sX, y = ev.pageY - sY;
        x = Math.max(0, Math.min(x, window.innerWidth - pWidget.offsetWidth));
        y = Math.max(0, Math.min(y, window.innerHeight - pWidget.offsetHeight));
        pWidget.style.left = x + 'px'; pWidget.style.top = y + 'px';
    };
    document.onmouseup = () => { document.onmousemove = null; };
};

// 縮放功能
pResizer.onmousedown = function (e) {
    e.preventDefault();
    const sW = pWidget.offsetWidth, sH = pWidget.offsetHeight;
    const sX = e.clientX, sY = e.clientY;
    document.onmousemove = (ev) => {
        const nW = sW + (ev.clientX - sX), nH = sH + (ev.clientY - sY);
        const mW = window.innerWidth - pWidget.offsetLeft, mH = window.innerHeight - pWidget.offsetTop;
        if (nW > 200 && nW < mW) pWidget.style.width = nW + 'px';
        if (nH > 150 && nH < mH) pWidget.style.height = nH + 'px';
    };
    document.onmouseup = () => { document.onmousemove = null; };
};

// --- 播放器核心功能 ---
const audio = document.getElementById('main-audio');

function loadLocalAudio(input) {
    const file = input.files[0];
    if (file) {
        audio.src = URL.createObjectURL(file);
        document.getElementById('local-music-title').innerText = file.name;
        audio.play();
        document.getElementById('local-play-icon').innerText = '⑊⑊';
    }
}

function toggleLocalPlay() {
    if (!audio.src) return;
    if (audio.paused) {
        audio.play();
        document.getElementById('local-play-icon').innerText = '⑊⑊';
    } else {
        audio.pause();
        document.getElementById('local-play-icon').innerText = '▶';
    }
}

audio.ontimeupdate = () => {
    document.getElementById('local-progress').style.width = (audio.currentTime / audio.duration) * 100 + "%";
};

function seekAudio(e) {
    if (!audio.src) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
}
