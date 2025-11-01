const progressContainer = document.getElementById('progress-container');
const player = document.getElementById('player');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

let expanded = false;

// 點擊切換展開 / 收合
player.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') return; // 不影響按鈕點擊
  expanded = !expanded;
  player.classList.toggle('expanded', expanded);
  progressContainer.classList.toggle('expanded', expanded);
  
});

// 播放 / 暫停
playBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (audio.paused) {
    audio.play().catch(()=>{}); // 避免未處理的 promise rejection
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
});

// 更新進度條與時間
audio.addEventListener('timeupdate', () => {
  if (!audio.duration || isNaN(audio.duration)) return;
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = progressPercent + '%';

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('click', (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  if (audio.duration && !isNaN(audio.duration)) {
    audio.currentTime = (clickX / width) * audio.duration;
  }
});

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}