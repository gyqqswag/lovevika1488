(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const HEART = 'M50 88C20 62 2 44 2 26 2 12 13 2 27 2 37 2 46 8 50 16 54 8 63 2 73 2 87 2 98 12 98 26 98 44 80 62 50 88Z';
  document.querySelectorAll('[data-heart]').forEach(p => p.setAttribute('d', HEART));

  /* ---------- Музыка ---------- */
  const audio = $('#bgm');
  const musicBtn = $('#music');
  let token = 0;
  let raf = 0;
  audio.volume = 0;

  function fadeTo(to, ms) {
    cancelAnimationFrame(raf);
    const from = audio.volume, t0 = performance.now();
    return new Promise(res => {
      const step = now => {
        const p = Math.min(1, (now - t0) / ms);
        audio.volume = from + (to - from) * (p * p * (3 - 2 * p));
        p < 1 ? (raf = requestAnimationFrame(step)) : res();
      };
      raf = requestAnimationFrame(step);
    });
  }

  function setMusicUI(on) {
    musicBtn.classList.toggle('muted', !on);
    musicBtn.setAttribute('aria-pressed', String(on));
    musicBtn.setAttribute('aria-label', on ? 'Выключить музыку' : 'Включить музыку');
  }

  async function musicOn(ms) {
    token++;
    setMusicUI(true);
    try {
      await audio.play();
      fadeTo(1, ms);
    } catch (e) {
      setMusicUI(false); // файл не найден или браузер заблокировал воспроизведение
    }
  }

  function musicOff() {
    const id = ++token;
    setMusicUI(false);
    fadeTo(0, 600).then(() => { if (id === token) audio.pause(); });
  }

  musicBtn.addEventListener('click', () => {
    musicBtn.classList.contains('muted') ? musicOn(1000) : musicOff();
  });

  /* ---------- Звёзды на тёмном фоне ---------- */
  const stars = $('#stars');
  for (let i = 0; i < 36; i++) {
    const s = document.createElement('span');
    const size = rnd(1.5, 3);
    s.className = 'star';
    s.style.cssText = `left:${rnd(0, 100)}%;top:${rnd(0, 100)}%;width:${size}px;height:${size}px;--t:${rnd(2, 5)}s;animation-delay:${-rnd(0, 5)}s`;
    stars.appendChild(s);
  }

  /* ---------- Объёмное сердце из слоёв ---------- */
  const h3 = $('#h3');
  const LAYERS = 12;
  for (let i = 0; i < LAYERS; i++) {
    const k = (i - (LAYERS - 1) / 2) / (LAYERS / 2);        // -1 … 1
    const scale = 0.8 + 0.2 * Math.sqrt(1 - k * k);          // выпуклая форма
    const front = i === LAYERS - 1;
    const fill = front ? 'url(#hg)' : `hsl(338 85% ${34 + i * 1.6}%)`;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 90');
    svg.style.transform = `translateZ(calc(var(--hs) * ${(k * 0.1).toFixed(3)})) scale(${scale.toFixed(3)})`;
    svg.innerHTML = `<path d="${HEART}" fill="${fill}"/>` +
      (front ? '<ellipse cx="30" cy="22" rx="11" ry="6" fill="#fff" opacity=".55" transform="rotate(-35 30 22)"/>' : '');
    h3.appendChild(svg);
  }

  /* ---------- Дождь из сердечек ---------- */
  function startRain() {
    const rain = $('#rain');
    const colors = ['#ff7eb3', '#ff9ec4', '#ffb3d1', '#f58ac0', '#ffc2d9', '#ff5c98'];
    const count = innerWidth < 600 ? 34 : 56;
    for (let i = 0; i < count; i++) {
      const o = document.createElement('div');
      o.className = 'rh';
      o.style.cssText = `left:${rnd(-2, 100)}%;--d:${rnd(7, 14)}s;--dl:${rnd(0, 7)}s`;
      const h = document.createElement('i');
      h.textContent = '♥';
      h.style.cssText = `--z:${rnd(11, 32)}px;--c:${colors[i % colors.length]};--o:${rnd(.45, .9)};--a:${rnd(8, 34)}px;--r:${rnd(8, 40)}deg;--s:${rnd(2, 4.5)}s`;
      o.appendChild(h);
      rain.appendChild(o);
    }
  }

  /* ---------- Пиксельные сердечки (как в Minecraft) ---------- */
  const MAP = ['.OOO.OOO.', 'OWWRORRRO', 'OWRRRRRRO', 'ORRRRRRRO', '.ORRRRRO.', '..ORRRO..', '...ORO...', '....O....'];
  const COL = { O: '#a3123f', R: '#ff2f5f', W: '#ffc2d4' };
  const PX_SVG = '<svg viewBox="0 0 9 8" shape-rendering="crispEdges" aria-hidden="true">' +
    MAP.flatMap((row, y) => [...row].map((c, x) =>
      c === '.' ? '' : `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${COL[c]}"/>`)).join('') + '</svg>';

  function burst() {
    const box = $('#hearts');
    const n = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      const el = document.createElement('div');
      el.className = 'px';
      el.innerHTML = PX_SVG;
      el.style.cssText = `left:${50 + rnd(-9, 9)}%;top:${22 + rnd(-4, 4)}%;width:${rnd(5.5, 8.5)}%;animation-delay:${(i * .22 + rnd(0, .15)).toFixed(2)}s`;
      box.appendChild(el);
      setTimeout(() => el.remove(), 3600 + i * 400);
    }
  }

  /* ---------- Главная последовательность ---------- */
  const card = $('#card');
  const openBtn = $('#openBtn');
  let started = false;

  openBtn.addEventListener('click', async () => {
    if (started) return;
    started = true;
    openBtn.classList.add('pressed');
    musicBtn.classList.add('visible');
    musicOn(1600);                                  // музыка стартует сразу после нажатия, fade-in 1,6 с

    card.classList.add('shake');                    // 1. вибрация
    await sleep(1500);
    card.classList.remove('shake');
    card.classList.add('crack');                    // 2. светящаяся трещина-сердце
    await sleep(1400);

    card.classList.add('split');                    // 3. раскол на две половины
    $('#heart3d').classList.add('go');              // 4–5. вылет, оборот, растворение сердца
    document.body.classList.add('pink');            // розовый фон
    startRain();                                    // дождь из сердечек
    await sleep(3300);

    $('#stage').classList.add('show');              // приближение камеры к сцене
    await sleep(3300);

    $('#stage').classList.add('kiss');              // поцелуй
    card.style.visibility = 'hidden';
    await sleep(1700);
    for (;;) {                                      // пиксельные сердечки группами
      burst();
      await sleep(rnd(1700, 2300));
    }
  });
})();
