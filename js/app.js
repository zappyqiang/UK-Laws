/* UK Law Life Quest — game engine. No dependencies, no build step. */
(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const app = $("#app");
  const stageById = id => LAW.stages.find(s => s.id === id);
  const storiesOf = id => LAW.stories.filter(s => s.stage === id);

  /* ---------------- state ---------------- */
  const KEY = "uk-law-life-quest-v1";
  const blank = () => ({ name: "", xp: 0, sound: true, theme: null, st: {}, okq: [], missed: [], best: {}, exam: 0, streak: 0, last: "" });
  let S = blank();
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { /* private mode: play without saving */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };
  const prog = id => (S.st[id] = S.st[id] || { watch: false, read: [], best: 0, stories: [] });

  const today = new Date().toISOString().slice(0, 10);
  if (S.last !== today) {
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak = S.last === y ? S.streak + 1 : 1; S.last = today; save();
  }

  const rankOf = xp => [...LAW.ranks].reverse().find(r => xp >= r.xp);
  const nextRank = xp => LAW.ranks.find(r => r.xp > xp);
  const starsOf = st => { const p = prog(st.id); return [p.watch, p.best >= 0.7, storiesOf(st.id).every(s => p.stories.includes(s.id))]; };
  const mastered = st => starsOf(st).every(Boolean);

  /* ---------------- feedback: toast, sound, confetti ---------------- */
  let toastT;
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2400); }
  let actx;
  function beep(notes) {
    if (!S.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      notes.forEach(([f, at, d]) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = "triangle"; o.frequency.value = f; o.connect(g); g.connect(actx.destination);
        const t = actx.currentTime + at; g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + d);
        o.start(t); o.stop(t + d);
      });
    } catch (e) { /* no audio */ }
  }
  const sfx = { good: () => beep([[660, 0, .12], [880, .1, .18]]), bad: () => beep([[220, 0, .25]]), win: () => beep([[523, 0, .12], [659, .12, .12], [784, .24, .12], [1047, .36, .3]]), tap: () => beep([[440, 0, .05]]) };

  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = $("#confetti"), x = c.getContext("2d"); c.width = innerWidth; c.height = innerHeight;
    const cols = ["#ff5d5d", "#f5a524", "#2c46d6", "#17a673", "#b388ff", "#06b6d4"];
    const P = Array.from({ length: 140 }, () => ({ x: Math.random() * c.width, y: -20 - Math.random() * c.height * .4, r: 4 + Math.random() * 6, c: cols[Math.floor(Math.random() * 6)], vx: -2 + Math.random() * 4, vy: 2 + Math.random() * 4, a: Math.random() * 6 }));
    const t0 = performance.now();
    (function draw(t) {
      x.clearRect(0, 0, c.width, c.height);
      P.forEach(p => { p.x += p.vx; p.y += p.vy; p.a += .12; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); x.restore(); });
      if (t - t0 < 2800) requestAnimationFrame(draw); else x.clearRect(0, 0, c.width, c.height);
    })(t0);
  }

  function addXP(n, why) {
    if (!n) return;
    const before = rankOf(S.xp); S.xp += n; save(); chip();
    const after = rankOf(S.xp);
    if (after !== before) { toast(`${after.icon} Promoted to ${after.name}!`); sfx.win(); confetti(); }
    else if (why) toast(`+${n} XP · ${why}`);
  }
  function chip() { const r = rankOf(S.xp); $("#xpChip").textContent = `${r.icon} ${S.xp} XP`; }

  /* ---------------- shell: theme, sound, routing ---------------- */
  function applyTheme() {
    const dark = S.theme ? S.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light"; $("#themeBtn").textContent = dark ? "☀️" : "🌙";
  }
  $("#themeBtn").onclick = () => { S.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; save(); applyTheme(); };
  $("#soundBtn").onclick = () => { S.sound = !S.sound; save(); $("#soundBtn").textContent = S.sound ? "🔊" : "🔇"; sfx.tap(); };
  $("#soundBtn").textContent = S.sound ? "🔊" : "🔇";

  let cleanups = [];
  const onLeave = fn => cleanups.push(fn);
  function render(html, navKey, color) {
    cleanups.forEach(f => f()); cleanups = [];
    if (window.speechSynthesis) speechSynthesis.cancel();
    document.documentElement.style.setProperty("--stage", color || "var(--brand)");
    app.innerHTML = `<div class="view">${html}</div>`;
    $$(".nav a").forEach(a => a.classList.toggle("on", a.dataset.nav === navKey));
    scrollTo(0, 0);
  }
  function route() {
    const [, a, b, c] = location.hash.split("/");
    if (a === "stage" && stageById(b)) return viewStage(stageById(b), c || "watch");
    if (a === "arcade") return b ? viewGame(b) : viewArcade();
    if (a === "stories") return viewStories();
    if (a === "story") { const s = LAW.stories.find(x => x.id === b); if (s) return viewStory(s); }
    if (a === "library") return viewLibrary();
    if (a === "passport") return viewPassport();
    return viewHome();
  }
  addEventListener("hashchange", route);

  /* ---------------- home ---------------- */
  function viewHome() {
    const r = rankOf(S.xp), n = nextRank(S.xp);
    const done = LAW.stages.filter(mastered).length;
    const nextStage = LAW.stages.find(s => !mastered(s)) || LAW.stages[0];
    const pct = n ? Math.round(((S.xp - r.xp) / (n.xp - r.xp)) * 100) : 100;
    const totalFacts = LAW.stages.reduce((t, s) => t + s.facts.length, 0);
    render(`
      <section class="hero">
        <div class="card hero-main">
          <h1>Live a whole life.<br>Learn every law on the way.</h1>
          <p>From your first cry to your last will: ${LAW.stages.length} life stages, ${totalFacts} laws explained in plain English, ${LAW.stories.length} real court stories, and mini-games to make it stick.</p>
          <div class="row">
            <a class="btn" href="#/stage/${nextStage.id}">${S.xp ? "Continue" : "Start"}: ${nextStage.icon} ${esc(nextStage.title)}</a>
            <a class="btn ghost" href="#/arcade">🎮 Arcade</a>
          </div>
        </div>
        <div class="card hero-side">
          <div class="row"><span class="rank-big">${r.icon}</span><div><b>${esc(S.name || "Your rank")}</b><br><span class="muted">${r.name}</span></div></div>
          <div class="bar" aria-label="Progress to next rank"><i style="width:${pct}%"></i></div>
          <small class="muted">${n ? `${n.xp - S.xp} XP to ${n.icon} ${n.name}` : "Top rank reached. All rise!"}</small>
          <div class="stats"><div><b>${S.xp}</b><span>XP</span></div><div><b>${done}/${LAW.stages.length}</b><span>stamps</span></div><div><b>🔥 ${S.streak}</b><span>day streak</span></div></div>
        </div>
      </section>
      <h2>🛣️ The Road of Life</h2>
      <p class="muted">Each stop has an animated explainer, the key laws, a quiz and true stories. Earn 3 stars to stamp your passport. Stops can be played in any order.</p>
      <div class="road">
        ${LAW.stages.map(st => {
          const s = starsOf(st);
          return `<div class="stop" style="--stage:${st.color}">
            <div class="node">${st.id === nextStage.id ? '<span class="walker">🚶</span>' : ""}${st.icon}</div>
            <div class="info"><a href="#/stage/${st.id}">
              <span class="pill">${esc(st.ages)}</span> <span class="stars" aria-label="${s.filter(Boolean).length} of 3 stars">${s.map(x => `<span class="${x ? "" : "off"}">⭐</span>`).join("")}</span><br>
              <b>${esc(st.title)}</b><small>${esc(st.tagline)}</small></a></div>
          </div>`;
        }).join("")}
      </div>
      <div class="grid">
        <a class="card game-card" href="#/arcade/exam"><span class="em">🎓</span><b>The Final Bar Exam</b><span class="muted">20 questions from every stage. Score 80% for your certificate.</span></a>
        <a class="card game-card" href="#/stories"><span class="em">📖</span><b>Law Stories</b><span class="muted">Snails, smoke balls and shipwrecks: you be the judge.</span></a>
        <a class="card game-card" href="#/library"><span class="em">🔎</span><b>Law Library</b><span class="muted">Search every law and look up tricky words.</span></a>
      </div>`, "home");
  }

  /* ---------------- stage ---------------- */
  const TABS = [["watch", "🎬 Watch"], ["learn", "📚 Learn"], ["quiz", "🎯 Quiz"], ["stories", "📖 Stories"], ["links", "🔗 Links"]];
  function viewStage(st, tab) {
    const p = prog(st.id), stars = starsOf(st);
    const ticks = { watch: p.watch, learn: p.read.length >= st.facts.length, quiz: p.best >= 0.7, stories: stars[2] };
    const i = LAW.stages.indexOf(st), prev = LAW.stages[i - 1], next = LAW.stages[i + 1];
    render(`
      <a class="back" href="#/">← Road of Life</a>
      <div class="stage-head">
        <div class="stage-icon">${st.icon}</div>
        <div><span class="pill place">${esc(st.ages)}</span> <span class="stars">${stars.map(x => `<span class="${x ? "" : "off"}">⭐</span>`).join("")}</span>
          <h1>${esc(st.title)}</h1><p class="muted" style="margin:0">${esc(st.tagline)}</p></div>
      </div>
      <div class="tabs" role="tablist">${TABS.map(([k, l]) => `<button class="tab ${k === tab ? "on" : ""}" role="tab" aria-selected="${k === tab}" data-tab="${k}">${l}${ticks[k] ? '<span class="tick">✓</span>' : ""}</button>`).join("")}</div>
      <div id="pane"></div>
      <div class="row" style="justify-content:space-between;margin-top:26px">
        ${prev ? `<a class="btn ghost small" href="#/stage/${prev.id}">← ${prev.icon} ${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a class="btn ghost small" href="#/stage/${next.id}">${next.icon} ${esc(next.title)} →</a>` : `<a class="btn ghost small" href="#/arcade/exam">🎓 Final Bar Exam →</a>`}
      </div>`, "home", st.color);
    $$(".tab").forEach(b => b.onclick = () => { location.hash = `#/stage/${st.id}/${b.dataset.tab}`; });
    const pane = $("#pane");
    ({ watch: paneWatch, learn: paneLearn, quiz: paneQuiz, stories: paneStories, links: paneLinks }[tab] || paneWatch)(st, pane);
  }

  /* --- animated explainer --- */
  function paneWatch(st, pane) {
    let i = 0, playing = true, timer, typer, narrate = false;
    onLeave(() => { clearTimeout(timer); clearInterval(typer); });
    const actor = ([e, x, y, s, a, say]) => `<div class="actor a-${a}" style="left:${x}%;top:${y}%"><span style="font-size:${s}em">${esc(e)}</span>${say ? `<span class="bubble">${esc(say)}</span>` : ""}</div>`;
    function show() {
      clearTimeout(timer); clearInterval(typer);
      const sc = st.scenes[i], last = i === st.scenes.length - 1;
      pane.innerHTML = `
        <div class="theatre" data-bg="${sc.bg}" aria-hidden="true"><div class="ground"></div>${sc.actors.map(actor).join("")}</div>
        <div class="dots">${st.scenes.map((_, k) => `<i class="${k === i ? "on" : k < i ? "done" : ""}"></i>`).join("")}</div>
        <div class="caption" aria-live="polite"><span class="n">Scene ${i + 1} of ${st.scenes.length}</span><span id="cap"></span></div>
        <div class="row controls" style="margin-top:12px">
          <button class="btn ghost small" id="pv" ${i ? "" : "disabled"}>◀ Back</button>
          <button class="btn ghost small" id="pp">${playing ? "⏸ Pause" : "▶ Play"}</button>
          <button class="btn ghost small" id="na">${narrate ? "🔈 Voice on" : "🔇 Voice off"}</button>
          ${last ? `<a class="btn small" href="#/stage/${st.id}/learn">Next: learn the laws →</a>` : `<button class="btn small" id="nx">Next ▶</button>`}
        </div>`;
      const cap = $("#cap"); let n = 0;
      typer = setInterval(() => { n += 2; cap.textContent = sc.cap.slice(0, n); if (n >= sc.cap.length) clearInterval(typer); }, 22);
      if (narrate && window.speechSynthesis) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(sc.cap); u.lang = "en-GB"; u.rate = 1; speechSynthesis.speak(u); }
      $("#pv").onclick = () => { i--; show(); };
      $("#pp").onclick = () => { playing = !playing; show(); };
      $("#na").onclick = () => { narrate = !narrate; if (!narrate && window.speechSynthesis) speechSynthesis.cancel(); show(); };
      if (!last) $("#nx").onclick = () => { i++; sfx.tap(); show(); };
      if (last) {
        const p = prog(st.id);
        if (!p.watch) { p.watch = true; save(); addXP(20, "explainer watched"); $$(".tab")[0].insertAdjacentHTML("beforeend", '<span class="tick">✓</span>'); }
      } else if (playing) timer = setTimeout(() => { i++; show(); }, 3500 + sc.cap.length * (narrate ? 75 : 55));
    }
    show();
  }

  /* --- fact cards --- */
  function factHTML(st, f, k, read) {
    const [t, d, law, place, url] = f;
    return `<details class="fact ${read ? "read" : ""}" data-k="${k}" style="--stage:${st.color}">
      <summary><span class="t">${esc(t)}</span><span class="pill place" title="Where this rule applies">${esc(LAW.places[place])}</span></summary>
      <div class="body"><p>${esc(d)}</p><p class="src">📜 ${esc(law)} · <a href="${esc(url)}" target="_blank" rel="noopener">Check the official source ↗</a></p></div>
    </details>`;
  }
  function paneLearn(st, pane) {
    const p = prog(st.id);
    pane.innerHTML = `<p class="muted">Tap a card to open it. The coloured tag shows where in the UK the rule applies. <span id="readN"></span></p>
      ${st.facts.map((f, k) => factHTML(st, f, k, p.read.includes(k))).join("")}
      <div class="row" style="margin-top:14px"><button class="btn ghost small" id="openAll">Open all</button><a class="btn" href="#/stage/${st.id}/quiz">I'm ready: quiz me →</a></div>`;
    const count = () => { $("#readN").textContent = `${p.read.length} of ${st.facts.length} read.`; };
    count();
    $$(".fact", pane).forEach(d => d.addEventListener("toggle", () => {
      const k = +d.dataset.k;
      if (d.open && !p.read.includes(k)) { p.read.push(k); d.classList.add("read"); save(); addXP(3); count(); if (p.read.length === st.facts.length) toast("📚 Every law in this stage read!"); }
    }));
    $("#openAll").onclick = () => $$(".fact", pane).forEach(d => d.open = true);
  }

  /* --- generic question player (quiz, arcade, exam) --- */
  function play(host, cfg) {
    const qs = cfg.questions; let i = 0, score = 0, streak = 0; const wrong = [];
    function ask() {
      const q = qs[i];
      const order = q.fixed ? q.o.map((_, k) => k) : shuffle(q.o.map((_, k) => k));
      host.innerHTML = `<div class="quiz">
        <div class="q-top"><span>${esc(cfg.title)} · ${i + 1}/${qs.length}</span><span>${streak > 1 ? `🔥 ${streak} in a row` : `✅ ${score}`}</span></div>
        <div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div>
        ${q.tag ? `<p style="margin:14px 0 0"><span class="pill">${esc(q.tag)}</span></p>` : ""}
        <div class="q-text">${esc(q.q)}</div>
        <div class="opts ${q.cols ? "cols" : ""}">${order.map(k => `<button class="opt" data-k="${k}">${esc(q.o[k])}</button>`).join("")}</div>
        <div id="why"></div></div>`;
      $$(".opt", host).forEach(b => b.onclick = () => {
        const ok = +b.dataset.k === q.a;
        $$(".opt", host).forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add("right"); });
        if (ok) { score++; streak++; sfx.good(); } else { b.classList.add("wrong"); streak = 0; wrong.push(q); sfx.bad(); }
        if (q.key) {
          if (ok) { const first = !S.okq.includes(q.key); if (first) S.okq.push(q.key); S.missed = S.missed.filter(k => k !== q.key); addXP(first ? 10 : 2); }
          else if (!S.missed.includes(q.key)) S.missed.push(q.key);
          save();
        } else if (ok) addXP(cfg.xpEach || 5);
        $("#why", host).innerHTML = `<div class="why ${ok ? "good" : "bad"}"><b>${ok ? pickOne(["Correct!", "Spot on!", "Nailed it!", "Yes!"]) : "Not quite."}</b> ${esc(q.why)}
          <div style="margin-top:10px"><button class="btn small" id="go">${i + 1 < qs.length ? "Next →" : "See my result"}</button></div></div>`;
        $("#go", host).onclick = () => { i++; i < qs.length ? ask() : finish(); };
        $("#go", host).focus();
      });
    }
    function finish() {
      const pct = score / qs.length, pass = pct >= (cfg.pass || 0.7);
      if (pass) { sfx.win(); confetti(); }
      const extra = cfg.onDone ? cfg.onDone(score, qs.length, pct) || "" : "";
      host.innerHTML = `<div class="quiz card center">
        <div class="result-big">${pct === 1 ? "🏆" : pass ? "🎉" : "💪"}</div>
        <h2>${score} / ${qs.length}</h2>
        <p>${pct === 1 ? "Flawless. The Supreme Court would like a word." : pass ? "Passed! You clearly know your rights." : "Not there yet. Review the answers below and try again."}</p>
        ${extra}
        ${wrong.length ? `<details style="text-align:left;margin:14px 0"><summary><b>Review what you missed (${wrong.length})</b></summary><ul class="review">${wrong.map(q => `<li><b>${esc(q.q)}</b><br>✅ ${esc(q.o[q.a])}. <span class="muted">${esc(q.why)}</span></li>`).join("")}</ul></details>` : ""}
        <div class="row" style="justify-content:center"><button class="btn" id="again">↻ Play again</button>${cfg.backHTML || ""}</div></div>`;
      $("#again", host).onclick = () => cfg.restart();
    }
    ask();
  }
  const pickOne = a => a[Math.floor(Math.random() * a.length)];
  const stageQs = st => st.quiz.map((q, k) => ({ ...q, key: `${st.id}:${k}` }));

  function paneQuiz(st, pane) {
    const p = prog(st.id);
    play(pane, {
      title: st.title, questions: shuffle(stageQs(st)), restart: () => paneQuiz(st, pane),
      backHTML: `<a class="btn ghost" href="#/stage/${st.id}/stories">📖 Read the stories →</a>`,
      onDone: (s, n, pct) => { if (pct > p.best) { p.best = pct; save(); } return pct >= 0.7 ? `<p>⭐ Quiz star earned for <b>${esc(st.title)}</b>. Best score: ${Math.round(p.best * 100)}%</p>` : `<p class="muted">You need 70% for the quiz star. Best so far: ${Math.round(p.best * 100)}%</p>`; }
    });
  }

  /* --- stories --- */
  const storyCard = s => { const st = stageById(s.stage), done = prog(s.stage).stories.includes(s.id);
    return `<a class="card story-card" href="#/story/${s.id}" style="--stage:${st.color}"><span class="em">${s.icon}</span><h3>${esc(s.title)} ${done ? "✓" : ""}</h3><span class="pill">${s.year}</span> <span class="pill place">${st.icon} ${esc(st.title)}</span><p class="muted" style="margin:.5em 0 0">${esc(s.hook)}</p></a>`; };
  function paneStories(st, pane) {
    pane.innerHTML = `<p class="muted">True stories behind the law. Read the facts, give your verdict, then see what the real judges decided.</p><div class="grid">${storiesOf(st.id).map(storyCard).join("")}</div>`;
  }
  function viewStories() {
    render(`<h1>📖 Law Stories</h1><p class="muted">Every one of these really happened. Could you have judged it right?</p><div class="grid">${LAW.stories.map(storyCard).join("")}</div>`, "stories");
  }
  function viewStory(s) {
    const st = stageById(s.stage), p = prog(st.id);
    render(`<div class="story">
      <a class="back" href="#/stage/${st.id}/stories">← ${st.icon} ${esc(st.title)} stories</a>
      <div class="center" style="font-size:3.4rem">${s.icon}</div>
      <h1 class="center">${esc(s.title)}</h1>
      <p class="center"><span class="pill">${s.year}</span> <span class="pill place">True story</span></p>
      ${s.text.map((t, k) => `<p class="para" style="animation-delay:${k * 0.25}s">${esc(t)}</p>`).join("")}
      <div class="card" style="margin-top:18px"><h2>⚖️ ${esc(s.q)}</h2>
        <div class="opts">${s.o.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join("")}</div></div>
      <div id="verdict"></div></div>`, "stories", st.color);
    $$(".opt").forEach(b => b.onclick = () => {
      const ok = +b.dataset.k === s.a;
      $$(".opt").forEach(x => { x.disabled = true; if (+x.dataset.k === s.a) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      ok ? sfx.good() : sfx.bad();
      if (!p.stories.includes(s.id)) { p.stories.push(s.id); save(); addXP(ok ? 25 : 15, ok ? "you judged it right" : "story read"); if (starsOf(st)[2]) toast(`⭐ Story star earned for ${st.title}`); }
      const all = LAW.stories, nxt = all[(all.indexOf(s) + 1) % all.length];
      $("#verdict").innerHTML = `<div class="card verdict" style="margin-top:14px">
        <h2><span class="gavel">🔨</span> ${ok ? "You agreed with the court!" : "The court saw it differently."}</h2>
        <p>${esc(s.verdict)}</p>
        <h3>💡 What it means for you</h3><p>${esc(s.lesson)}</p>
        <div class="row"><a class="btn ghost small" href="${esc(s.url)}" target="_blank" rel="noopener">Read more about this case ↗</a>
        <a class="btn small" href="#/story/${nxt.id}">Next story: ${nxt.icon} ${esc(nxt.title)} →</a></div></div>`;
      $("#verdict").scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  /* --- links --- */
  const KIND = { gov: "🏛️", law: "📜", video: "🎥", help: "🤝" };
  function paneLinks(st, pane) {
    pane.innerHTML = `<p class="muted">Go to the source. 🏛️ official guidance · 📜 the actual Act · 🎥 videos · 🤝 free help and advice. All links open in a new tab.</p>
      <ul class="ref-list">${st.refs.map(([t, u, k]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener"><span class="k">${KIND[k] || "🔗"}</span><span>${esc(t)} ↗</span></a></li>`).join("")}</ul>`;
  }

  /* ---------------- arcade ---------------- */
  const GAMES = {
    ages: ["🎂", "Age Ladder", "How old must you be? Ten quick-fire rounds."],
    myths: ["🕵️", "Myth Buster", "Real law or total nonsense? Some of these are wild."],
    sort: ["🏛️", "Sort the Court", "Civil or criminal? Send each case to the right court."],
    bill: ["📜", "Bill Builder", "Put the stages of making a law in order, against the clock."],
    revise: ["🧠", "Revision Deck", "Only the questions you've got wrong. Clear the deck!"],
    exam: ["🎓", "The Final Bar Exam", "20 questions from all of life. 80% earns your certificate."]
  };
  function viewArcade() {
    render(`<h1>🎮 Arcade</h1><p class="muted">Short games to test what you know. Every correct answer earns XP.</p>
      <div class="grid">${Object.entries(GAMES).map(([k, [e, t, d]]) => `<a class="card game-card" href="#/arcade/${k}"><span class="em">${e}</span><b>${t}</b><span class="muted">${d}</span>
        <small>${k === "revise" ? `${S.missed.length} card${S.missed.length === 1 ? "" : "s"} waiting` : S.best[k] != null ? `Best: ${k === "bill" ? S.best[k] + "s" : S.best[k] + "%"}` : "Not played yet"}</small></a>`).join("")}</div>`, "arcade");
  }
  function viewGame(k) {
    if (!GAMES[k]) return viewArcade();
    const [e, t, d] = GAMES[k];
    render(`<a class="back" href="#/arcade">← Arcade</a><h1>${e} ${t}</h1><p class="muted">${d}</p><div id="game"></div>`, "arcade");
    const host = $("#game"), backHTML = `<a class="btn ghost" href="#/arcade">More games</a>`;
    const best = (kk, pct) => { const v = Math.round(pct * 100); if (S.best[kk] == null || v > S.best[kk]) { S.best[kk] = v; save(); return `<p>🏅 New personal best: ${v}%</p>`; } return `<p class="muted">Personal best: ${S.best[kk]}%</p>`; };
    const restart = () => viewGame(k);
    if (k === "ages") {
      const opts = [10, 12, 13, 14, 16, 17, 18, 21, 22];
      play(host, { title: t, restart, backHTML, onDone: (s, n, p) => best(k, p),
        questions: pick(LAW.ages, 10).map(([thing, age, note]) => ({ q: `How old must you be to ${thing}?`, o: opts.map(String), a: opts.indexOf(age), why: `${age}. ${note}`, fixed: true, cols: true })) });
    } else if (k === "myths") {
      play(host, { title: t, restart, backHTML, onDone: (s, n, p) => best(k, p),
        questions: pick(LAW.myths, 10).map(([m, tr, why]) => ({ q: `“${m}”`, o: ["✅ True: that's the law", "❌ Myth"], a: tr ? 0 : 1, why, fixed: true, tag: "Law or myth?" })) });
    } else if (k === "sort") {
      play(host, { title: t, restart, backHTML, onDone: (s, n, p) => best(k, p),
        questions: pick(LAW.sort, 10).map(([m, kind, why]) => ({ q: m, o: ["🤝 Civil: person v person", "🚔 Criminal: the state v the accused"], a: kind === "civil" ? 0 : 1, why, fixed: true, tag: "Which kind of case?" })) });
    } else if (k === "revise") {
      const qs = S.missed.map(key => { const [id, n] = key.split(":"); const st = stageById(id); return st && st.quiz[n] ? { ...st.quiz[n], key, tag: `${st.icon} ${st.title}` } : null; }).filter(Boolean);
      if (!qs.length) { host.innerHTML = `<div class="card center"><div class="result-big">🧹</div><h2>Your deck is clear!</h2><p>Questions you get wrong in any stage quiz land here so you can practise them until they stick.</p><a class="btn" href="#/">Back to the journey</a></div>`; return; }
      play(host, { title: t, restart, backHTML, questions: shuffle(qs).slice(0, 15), onDone: () => `<p class="muted">${S.missed.length} card${S.missed.length === 1 ? "" : "s"} left in your deck.</p>` });
    } else if (k === "exam") {
      const qs = pick(LAW.stages.flatMap(st => stageQs(st).map(q => ({ ...q, tag: `${st.icon} ${st.title}` }))), 20);
      play(host, { title: t, restart, backHTML: `<a class="btn ghost" href="#/passport">My passport</a>`, pass: 0.8, questions: qs,
        onDone: (s, n, p) => { const v = Math.round(p * 100); if (v > S.exam) { S.exam = v; save(); } return p >= 0.8 ? `<p>🎓 You passed the Bar Exam with ${v}%! Your certificate is waiting in your <a href="#/passport">passport</a>.</p>` : `<p class="muted">You need 80% to pass. Best so far: ${S.exam}%</p>`; } });
    } else billGame(host);
  }
  function billGame(host) {
    const steps = LAW.billSteps; let n = 0, slips = 0; const t0 = Date.now();
    const tick = setInterval(() => { const el = $("#clock"); if (el) el.textContent = ((Date.now() - t0) / 1000).toFixed(0) + "s"; }, 250);
    onLeave(() => clearInterval(tick));
    host.innerHTML = `<div class="card"><div class="q-top"><span>Tap the stages in the right order</span><span>⏱ <span id="clock">0s</span></span></div>
      <div class="track" id="track"><span>📄 A Bill is introduced…</span></div>
      <div class="steps">${shuffle(steps.map((s, k) => k)).map(k => `<button class="step" data-k="${k}">${esc(steps[k][0])}<small>${esc(steps[k][1])}</small></button>`).join("")}</div>
      <div id="billDone"></div></div>`;
    $$(".step", host).forEach(b => b.onclick = () => {
      if (+b.dataset.k !== n) { slips++; sfx.bad(); b.classList.remove("nope"); void b.offsetWidth; b.classList.add("nope"); return; }
      b.classList.add("placed"); b.disabled = true; sfx.good(); n++;
      $("#track").insertAdjacentHTML("beforeend", `<span>${n}. ${esc(steps[n - 1][0])}</span>`);
      if (n === steps.length) {
        clearInterval(tick); const secs = Math.round((Date.now() - t0) / 1000); const pb = S.best.bill == null || secs < S.best.bill;
        if (pb) { S.best.bill = secs; save(); } addXP(Math.max(10, 40 - slips * 5), "Bill passed"); sfx.win(); confetti();
        $("#billDone").innerHTML = `<div class="why good" style="margin-top:14px"><b>👑 Royal Assent! Your Bill is now an Act of Parliament.</b> ${secs}s with ${slips} slip${slips === 1 ? "" : "s"}. ${pb ? "New best time!" : `Best: ${S.best.bill}s`}
          <div class="row" style="margin-top:10px"><button class="btn small" id="again">↻ Again</button><a class="btn ghost small" href="https://www.parliament.uk/about/how/laws/passage-bill/" target="_blank" rel="noopener">How it really works ↗</a></div></div>`;
        $("#again").onclick = () => viewGame("bill");
      }
    });
  }

  /* ---------------- library ---------------- */
  function viewLibrary() {
    render(`<h1>🔎 Law Library</h1><p class="muted">Search all ${LAW.stages.reduce((t, s) => t + s.facts.length, 0)} laws in the game, or look up a word in the glossary.</p>
      <input type="search" id="q" placeholder="Try: knife, deposit, pension, consent…" aria-label="Search laws">
      <div class="chips" id="chips"><button class="chip on" data-s="">All</button>${LAW.stages.map(s => `<button class="chip" data-s="${s.id}">${s.icon} ${esc(s.title)}</button>`).join("")}<button class="chip" data-s="_gloss">📖 Glossary</button></div>
      <div id="results"></div>`, "library");
    let filter = "";
    const draw = () => {
      const term = $("#q").value.trim().toLowerCase(); let html = "", count = 0;
      if (filter !== "_gloss") LAW.stages.filter(s => !filter || s.id === filter).forEach(st => {
        const hits = st.facts.map((f, k) => [f, k]).filter(([f]) => !term || f.slice(0, 3).join(" ").toLowerCase().includes(term));
        if (hits.length) { count += hits.length; html += `<h2 style="margin-top:18px">${st.icon} ${esc(st.title)}</h2>` + hits.map(([f, k]) => factHTML(st, f, k, false)).join(""); }
      });
      if (!filter || filter === "_gloss") {
        const g = LAW.glossary.filter(([w, d]) => !term || (w + " " + d).toLowerCase().includes(term));
        if (g.length) { count += g.length; html += `<h2 style="margin-top:18px">📖 Glossary</h2><dl class="gloss card">${g.map(([w, d]) => `<dt>${esc(w)}</dt><dd>${esc(d)}</dd>`).join("")}</dl>`; }
      }
      $("#results").innerHTML = count ? html : `<p class="card">Nothing found for “${esc(term)}”. Try a shorter word.</p>`;
    };
    $("#q").oninput = draw;
    $$("#chips .chip").forEach(c => c.onclick = () => { filter = c.dataset.s; $$("#chips .chip").forEach(x => x.classList.toggle("on", x === c)); draw(); });
    draw();
  }

  /* ---------------- passport ---------------- */
  function viewPassport() {
    const r = rankOf(S.xp), n = nextRank(S.xp), got = LAW.stages.filter(mastered).length;
    const pct = n ? Math.round(((S.xp - r.xp) / (n.xp - r.xp)) * 100) : 100;
    const storiesRead = Object.values(S.st).reduce((t, p) => t + (p.stories || []).length, 0);
    render(`<h1>🛂 My Law Passport</h1>
      <div class="card"><div class="row"><span class="rank-big">${r.icon}</span><div style="flex:1;min-width:200px"><b>${r.name}</b> · ${S.xp} XP
        <div class="bar" style="margin:6px 0"><i style="width:${pct}%"></i></div><small class="muted">${n ? `${n.xp - S.xp} XP to ${n.icon} ${n.name}` : "Highest rank achieved."}</small></div></div>
        <p style="margin-top:14px"><label for="nm"><b>Name on passport</b> <span class="muted">(stays on this device only)</span></label><br><input type="text" id="nm" maxlength="40" value="${esc(S.name)}" placeholder="Your name"></p>
        <div class="stats"><div><b>${got}/${LAW.stages.length}</b><span>stages stamped</span></div><div><b>${storiesRead}/${LAW.stories.length}</b><span>stories judged</span></div><div><b>${S.okq.length}</b><span>questions mastered</span></div></div></div>
      <h2 style="margin-top:22px">Stamps</h2><p class="muted">Earn all three stars in a stage (watch, quiz 70%+, judge every story) to get its stamp.</p>
      <div class="stamps">${LAW.stages.map(st => `<a class="stamp ${mastered(st) ? "got" : ""}" style="--stage:${st.color};text-decoration:none" href="#/stage/${st.id}"><span><span class="em">${st.icon}</span>${esc(st.title)}<br>${starsOf(st).map(x => x ? "⭐" : "☆").join("")}</span></a>`).join("")}</div>
      <h2 style="margin-top:22px">Ranks</h2><div class="chips">${LAW.ranks.map(x => `<span class="chip ${S.xp >= x.xp ? "on" : ""}">${x.icon} ${x.name} · ${x.xp}</span>`).join("")}</div>
      <h2 style="margin-top:22px">Certificate</h2>
      ${S.exam >= 80 ? `<div class="cert"><div style="font-size:3rem">🎓⚖️</div><p class="muted">This certifies that</p><div class="name">${esc(S.name || "A Brilliant Citizen")}</div>
        <p style="margin-top:12px">passed the <b>UK Law Life Quest Final Bar Exam</b> with a score of <b>${S.exam}%</b></p><p class="muted">Rank: ${r.icon} ${r.name} · ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}<br><small>A learning award. Not a legal qualification!</small></p></div>
        <p class="no-print center" style="margin-top:10px"><button class="btn small" id="print">🖨 Print certificate</button></p>`
        : `<div class="card center"><p>Pass the <b>Final Bar Exam</b> with 80% or more to unlock your printable certificate. Best so far: ${S.exam}%.</p><a class="btn" href="#/arcade/exam">Take the exam</a></div>`}
      <p class="no-print" style="margin-top:30px"><button class="btn ghost small" id="reset">Reset all my progress</button></p>`, "passport");
    $("#nm").oninput = e => { S.name = e.target.value.trim(); save(); const nm = $(".cert .name"); if (nm) nm.textContent = S.name || "A Brilliant Citizen"; };
    if ($("#print")) $("#print").onclick = () => print();
    $("#reset").onclick = () => { if (confirm("Erase all XP, stars and stamps on this device?")) { const keep = { sound: S.sound, theme: S.theme }; S = Object.assign(blank(), keep, { last: today, streak: 1 }); save(); chip(); viewPassport(); } };
  }

  /* ---------------- go ---------------- */
  applyTheme(); chip(); route();
})();
