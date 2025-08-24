async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

window.onload = async function () {
  const url = new URL(window.location.href);
  const debug = url.searchParams.get("debug");
  const password = url.searchParams.get("password");

  // SHA-256 驗證
  const correctHash = "0ea8f6b3e97f3920ebc96cb8c9a0a5a93d65c5cf2938fda3a9a520fdfbff7c4f";
  console.log("debug:", debug, "password:", password);

  if (debug && debug.toLowerCase() === "true" && password) {
    const inputHash = await sha256(password);
    console.log("inputHash:", inputHash);
    console.log("correctHash:", correctHash);
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
};
