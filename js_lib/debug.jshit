async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 取得 query string，不論是在 search 或 hash
function getQueryParams() {
  let paramsStr = '';
  if (window.location.search.length > 1) {
    paramsStr = window.location.search.substring(1);
  } else if (window.location.hash.indexOf('?') !== -1) {
    paramsStr = window.location.hash.split('?')[1];
    // hash 可能還有 /README 之類，剪掉
    if (paramsStr.indexOf('#') !== -1) paramsStr = paramsStr.split('#')[0];
    if (paramsStr.indexOf('/') !== -1) paramsStr = paramsStr.split('/')[0];
  }
  const params = new URLSearchParams(paramsStr);
  return {
    debug: params.get('debug'),
    password: params.get('password')
  };
}

window.addEventListener('load', async function () {
  const { debug, password } = getQueryParams();

  const correctHash = "0ea8f6b3e97f3920ebc96cb8c9a0a5a93d65c5cf2938fda3a9a520fdfbff7c4f";
  console.log("debug:", debug, "password:", password);

  if (debug && debug.toLowerCase() === "true" && password) {
    const inputHash = await sha256(password);
    console.log("inputHash:", inputHash);
    if (inputHash === correctHash) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/eruda';
      document.body.appendChild(s);
      s.onload = function () {
        eruda.init();
        console.log("Eruda loaded!");
      };
    } else {
      alert("密碼錯誤或 hash 不符\ninputHash: " + inputHash + "\ncorrectHash: " + correctHash);
      console.warn("密碼錯誤或 hash 不符");
    }
  }
});
