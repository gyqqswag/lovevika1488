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

  /* ---------- Город на закате ---------- */
  (function buildCity() {
    let seed = 7;
    const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const layers = [
      { c: '#f2adcb', h: [150, 260], w: [40, 80], win: 0 },
      { c: '#d98bbb', h: [100, 200], w: [36, 70], win: 0 },
      { c: '#a85a92', h: [50, 140], w: [30, 64], win: 1 }
    ];
    let out = '';
    layers.forEach(L => {
      for (let x = -20; x < 1620;) {
        const w = L.w[0] + r() * (L.w[1] - L.w[0]);
        const h = L.h[0] + r() * (L.h[1] - L.h[0]);
        out += `<rect x="${x.toFixed(1)}" y="${(400 - h).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="${L.c}"/>`;
        if (r() < .3) out += `<rect x="${(x + w * .35).toFixed(1)}" y="${(386 - h).toFixed(1)}" width="${(w * .3).toFixed(1)}" height="14" fill="${L.c}"/>`;
        if (r() < .15) out += `<rect x="${(x + w / 2 - 1).toFixed(1)}" y="${(366 - h).toFixed(1)}" width="2" height="34" fill="${L.c}"/>`;
        if (L.win) {
          for (let wx = x + 6; wx < x + w - 8; wx += 11)
            for (let wy = 408 - h; wy < 392; wy += 15)
              if (r() < .28) out += `<rect x="${wx.toFixed(1)}" y="${wy.toFixed(1)}" width="5" height="7" fill="#ffe7a8" opacity=".85"/>`;
        }
        x += w + r() * 6;
      }
    });
    $('#city').innerHTML = out;
  })();

  /* ---------- Текст песни из ID3-тегов mp3 (USLT / SYLT), запасной вариант — music.lrc ---------- */
  const lyricsEl = $('#lyrics');
  const lyricsText = lyricsEl.firstElementChild;
  let lyr = { lines: [], synced: false };
  let shown = -2;

  const synchsafe = (b, i) => (b[i] << 21) | (b[i + 1] << 14) | (b[i + 2] << 7) | b[i + 3];
  const u32 = (b, i) => ((b[i] << 24) | (b[i + 1] << 16) | (b[i + 2] << 8) | b[i + 3]) >>> 0;

  function decode(bytes, enc) {
    if (enc === 1) {
      if (bytes[0] === 0xFE && bytes[1] === 0xFF) return new TextDecoder('utf-16be').decode(bytes.subarray(2));
      if (bytes[0] === 0xFF && bytes[1] === 0xFE) bytes = bytes.subarray(2);
      return new TextDecoder('utf-16le').decode(bytes);
    }
    return new TextDecoder(['iso-8859-1', 'utf-16le', 'utf-16be', 'utf-8'][enc] || 'utf-8').decode(bytes);
  }

  function readStr(b, pos, enc) {
    const wide = enc === 1 || enc === 2;
    let i = pos;
    while (i < b.length && !(b[i] === 0 && (!wide || b[i + 1] === 0))) i += wide ? 2 : 1;
    return [decode(b.subarray(pos, i), enc), i + (wide ? 2 : 1)];
  }

  function parseUSLT(body) {
    const enc = body[0];
    const [, pos] = readStr(body, 4, enc);
    return decode(body.subarray(pos), enc);
  }

  function parseSYLT(body) {
    const enc = body[0];
    if (body[4] !== 2) return null;                 // поддерживаем метки времени в миллисекундах
    let [, pos] = readStr(body, 6, enc);
    const lines = [];
    let cur = null;
    const flush = () => { if (cur && cur.text.trim()) lines.push(cur); cur = null; };
    while (pos < body.length - 4) {
      let t;
      [t, pos] = readStr(body, pos, enc);
      const ts = u32(body, pos);
      pos += 4;
      if (t.startsWith('\n')) flush();
      if (!cur) cur = { t: ts / 1000, text: '' };
      cur.text += t.replace(/\n/g, '');
      if (t.endsWith('\n')) flush();
    }
    flush();
    return lines.length > 1 ? lines : null;
  }

  function parseID3(b) {
    if (!b || b[0] !== 0x49 || b[1] !== 0x44 || b[2] !== 0x33) return null;
    const ver = b[3], flags = b[5];
    const end = Math.min(b.length, 10 + synchsafe(b, 6));
    let pos = 10;
    if (flags & 0x40) pos += ver === 4 ? synchsafe(b, pos) : 4 + u32(b, pos);
    const idLen = ver === 2 ? 3 : 4, hdr = ver === 2 ? 6 : 10, found = {};
    while (pos + hdr <= end) {
      const id = String.fromCharCode(...b.subarray(pos, pos + idLen));
      if (!/^[A-Z0-9]+$/.test(id)) break;
      const s = b.subarray(pos + idLen, pos + hdr);
      const size = ver === 2 ? (s[0] << 16) | (s[1] << 8) | s[2] : ver === 4 ? synchsafe(s, 0) : u32(s, 0);
      const body = b.subarray(pos + hdr, pos + hdr + size);
      if (id === 'USLT' || id === 'ULT') found.uslt = parseUSLT(body);
      if (id === 'SYLT' || id === 'SLT') found.sylt = parseSYLT(body);
      pos += hdr + size;
    }
    return found;
  }

  async function readTag(url) {
    let r = await fetch(url, { headers: { Range: 'bytes=0-9' } });
    let buf = new Uint8Array(await r.arrayBuffer());
    if (r.status === 206) {                          // сервер умеет Range: берём только тег
      if (buf[0] !== 0x49 || buf[1] !== 0x44 || buf[2] !== 0x33) return null;
      const size = synchsafe(buf, 6) + 10;
      r = await fetch(url, { headers: { Range: `bytes=0-${size - 1}` } });
      buf = new Uint8Array(await r.arrayBuffer());
    }
    return buf;
  }

  function parseLyrics(text) {                       // LRC с метками [мм:сс.xx] или простой текст
    const timed = [], plain = [];
    text.split(/\r\n|\n|\r/).forEach(l => {
      const stamps = [...l.matchAll(/\[(\d+):(\d+(?:[.:]\d+)?)\]/g)];
      const t = l.replace(/\[[^\]]*\]/g, '').trim();
      if (!t) return;
      if (stamps.length) stamps.forEach(m => timed.push({ t: +m[1] * 60 + parseFloat(m[2].replace(':', '.')), text: t }));
      else plain.push({ t: 0, text: t });
    });
    return timed.length > 1 ? { lines: timed.sort((a, b) => a.t - b.t), synced: true } : { lines: plain, synced: false };
  }

  async function loadLyrics() {
    try {
      const tag = parseID3(await readTag(audio.getAttribute('src')));
      if (tag && tag.sylt) lyr = { lines: tag.sylt, synced: true };
      else if (tag && tag.uslt) lyr = parseLyrics(tag.uslt);
    } catch (e) { /* нет файла или fetch недоступен */ }
    if (!lyr.lines.length) {
      try {
        const r = await fetch('music.lrc');
        if (r.ok) lyr = parseLyrics(await r.text());
      } catch (e) { /* файла нет */ }
    }
  }
  loadLyrics();

  function updateLyrics() {
    const L = lyr.lines;
    if (!started || !L.length) return;
    const t = audio.currentTime;
    let i = -1;
    if (lyr.synced) {
      for (let k = 0; k < L.length && L[k].t <= t; k++) i = k;
    } else if (isFinite(audio.duration) && audio.duration > 0) {
      i = Math.min(L.length - 1, Math.floor(t / audio.duration * L.length));   // без меток — равномерно по длине трека
    }
    if (i === shown) return;
    shown = i;
    lyricsEl.classList.remove('on');
    setTimeout(() => {
      if (shown !== i || i < 0) return;
      lyricsText.textContent = L[i].text;
      lyricsEl.classList.add('on');
    }, 220);
  }
  setInterval(updateLyrics, 150);

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

    $('#sunset').classList.add('show');
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
