(function () {
  if (window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-square';
  document.body.appendChild(dot);

  let x = -100, y = -100;
  let tx = -100, ty = -100;
  let scale = 1, targetScale = 1;
  const ease = 0.22;

  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (!dot.classList.contains('is-active')) dot.classList.add('is-active');
  }, { passive: true });

  document.addEventListener('mouseleave', () => dot.classList.remove('is-active'));
  document.addEventListener('mouseenter', () => dot.classList.add('is-active'));

  document.addEventListener('mouseover', (e) => {
    targetScale = e.target.closest('a, button, summary, [role="button"]') ? 2 : 1;
  }, { passive: true });

  function tick() {
    x += (tx - x) * ease;
    y += (ty - y) * ease;
    scale += (targetScale - scale) * ease;
    dot.style.transform =
      'translate3d(' + (x - 7) + 'px,' + (y - 7) + 'px,0) scale(' + scale.toFixed(3) + ')';
    requestAnimationFrame(tick);
  }
  tick();
})();
