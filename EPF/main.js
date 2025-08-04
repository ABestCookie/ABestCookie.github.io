function calculateIntersection() {
  const ids = ['apx','apy','bpx','bpy','cpx','cpy','dpx','dpy'];
  const vals = ids.map(id => parseFloat(document.getElementById(id).value));

  if (vals.some(isNaN)) {
    document.getElementById("resultX").textContent = "-";
    document.getElementById("resultZ").textContent = "-";
    return;
  }

  const [apx, apy, bpx, bpy, cpx, cpy, dpx, dpy] = vals;

  const a = apy - bpy;
  const b = apx - bpx;
  const c = apx * a + apy * b;

  const d = cpy - dpy;
  const e = cpx - dpx;
  const f = cpx * d + cpy * e;

  const denominator = a * e - b * d;

  if (denominator === 0) {
    document.getElementById("resultX").textContent = "無解";
    document.getElementById("resultZ").textContent = "無解";
    return;
  }

  const x = (c * e - b * f) / denominator;
  const z = (a * f - c * d) / denominator;

  document.getElementById("resultX").textContent = x.toFixed(4);
  document.getElementById("resultZ").textContent = z.toFixed(4);
}

document.querySelectorAll("input").forEach(input =>
  input.addEventListener("input", calculateIntersection)
);
