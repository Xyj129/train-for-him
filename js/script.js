/* =========================================================
   开往大连的 V681 · 12 个整点小格子
   改文案 / 改时间 / 改物品，只动 SLOTS 就行
   ========================================================= */

// 在一起的起始日（用于「在一起第 N 天」）
const TOGETHER_SINCE = "2026-09-27T00:00:00";
// 这一趟车显示的日期（在一起第 61 天）
const SHOW_DATE = "2026-11-26T00:00:00";
// 26 号零点前默认全部解锁（方便你自己预览）；
// 上车当天就一律按真实时刻一格一格开，避免他提前拆完
const DEMO_UNTIL = "2026-11-26T00:00:00";

// 12 个格子：时间 / 真实解锁时刻 / 标题 / 表情 / 物品名 / 独白 / 落款 / 窗景 / 天色
const SLOTS = [
  {
    time: "20:10", at: "2026-11-26T20:10:00",
    title: "上车了", emoji: "🧣", item: "一条毯子",
    line: "也不知道你的那个车厢里面人多不多，能不能休息的好，",
    foot: "盖好小毯子，不要感冒哦，不然我会心疼的，爱你哥哥。",
    note: "窗外 · 北京的灯——点亮奔赴爱之旅的第一站", sky: ["#0a0e2a", "#221f4a"], night: true,
  },
  {
    time: "21:00", at: "2026-11-26T21:00:00",
    title: "一杯热水", emoji: "🥤", item: "一杯热水",
    line: "不知道你在车上会不会饿，\n有没有吃过晚饭了，\n记得不要喝凉水哦，小心肚肚疼！\n这次的喜至喜家我请哥哥吃，\n和喜欢的人吃小火锅啦~",
    foot: "我一直在思念你。",
    note: "窗外 · 夜色——今晚夜色真美，我正在想你~", sky: ["#0a0e2a", "#1e1c44"], night: true,
  },
  {
    time: "22:02", at: "2026-11-26T22:02:00",
    title: "唐山北", emoji: "🎧", item: "一副耳机",
    line: "唐山北\n窗外有小站的灯，一晃就过去了。\n要是睡不着，我哼几句歌哄哄哥哥~",
    foot: "我的宝贝，宝贝~给你一点甜甜，让你今夜都好眠！",
    note: "窗外 · 一个小站——我和哥哥又近了一点~希望再近一点儿", sky: ["#0b1030", "#231f4c"], night: true,
  },
  {
    time: "23:00", at: "2026-11-26T23:00:00",
    title: "熄灯前", emoji: "🍬", item: "晚安吻",
    line: "车厢要熄灯了。\n隔空投递一个香吻给哥哥，以解相思之苦。",
    foot: "我也准备上床了，今天再宠幸一下小狮子，后面就可以抱着你了，小狮子可以暂时下岗咯~",
    note: "窗外 · 熄灯了——马上就可以和你住一起了，真的亲到你抱到你，爱你哥哥。", sky: ["#080c24", "#171a3c"], night: true,
  },
  {
    time: "00:00", at: "2026-11-27T00:00:00",
    title: "零点", emoji: "🌙", item: "一小片月光",
    line: "零点，11 月 27 号了。\n不知道你有没有睡着，但我在心里偷偷说了一句：\n谢谢你愿意跑这么远。",
    foot: "月亮替我看着你。",
    note: "窗外 · 月亮——", sky: ["#070a20", "#141838"], night: true,
  },
  {
    time: "01:00", at: "2026-11-27T01:00:00",
    title: "睡吧", emoji: "💤", item: "一床被子角",
    line: "一点了，哥哥应该早就睡熟啦。\n我不吵你，就把这句话放在这儿：\n我爱你，真的很爱你~。",
    foot: "不用回，安心睡觉觉昂，明天还要陪我陪朋友呢，精神头必须养好咯。",
    note: "窗外 · 深夜——想你的夜~多希望你能在我身边", sky: ["#060920", "#101334"], night: true,
  },
  {
    time: "03:00", at: "2026-11-27T03:00:00",
    title: "我醒了一下", emoji: "🥛", item: "一个亲亲",
    line: "三点，你猜我怎么醒来的，\n其实是我牵挂的小人在火车上，正在义无反顾地向我走来，\n我开心地偷笑醒来！",
    foot: "火车上肯定睡不安稳，到时候住一起了，我俩好好抱着睡觉觉~",
    note: "窗外 · 夜最深的时候——我想我的梦里一定有你，我很幸福~", sky: ["#060920", "#0f1232"], night: true,
  },
  {
    time: "05:00", at: "2026-11-27T05:00:00",
    title: "天快亮了", emoji: "🧥", item: "一件外套",
    line: "五点，天边开始发白。\n你好呀我的老公宝宝，提前说一声早早早安~",
    foot: "我还在睡梦中ing，我也养精蓄锐地，这样明天化妆打扮才好看！",
    note: "窗外 · 天边发白——幸福正在加载哦，请耐心等待ing~", sky: ["#1a1f4a", "#6a4f6a"], night: false,
  },
  {
    time: "06:10", at: "2026-11-27T06:10:00",
    title: "瓦房店", emoji: "🥐", item: "一个热面包",
    line: "瓦房店到了。\n饿不饿呀哥哥的小肚肚，姐姐这次请你吃干锅排骨怎么样呀~",
    foot: "哥哥想什么时候吃呀，直接跟我说，我请客哦！",
    note: "窗外 · 晨光——心情美美哒，希望是晴天哦！", sky: ["#3d3f6e", "#d49a82"], night: false,
  },
  {
    time: "06:45", at: "2026-11-27T06:45:00",
    title: "普兰店", emoji: "💐", item: "一小束花",
    line: "普兰店，最后两站。\n还记得我答应你的事嘛，\n今天我会让哥哥成为收到花花的男孩纸！",
    foot: "爱心花花还在准备中ing，请哥哥燥候！",
    note: "窗外 · 日出——照得心里暖洋洋的，两个心要迫不及待地相遇了~", sky: ["#6f8fc0", "#ffd6a0"], night: false,
  },
  {
    time: "07:25", at: "2026-11-27T07:25:00",
    title: "金州", emoji: "👩", item: "我自己",
    line: "金州。\n哥哥有没有从睡梦中醒过来捏\n马上到站咯，乖宝宝可以清醒一下咯~亲一个mua",
    foot: "距离越来越近啦，我走在上课的路上开心得想飞起来。",
    note: "窗外 · 大连的早晨——见面倒计时ing", sky: ["#8ec5e8", "#d9efe0"], night: false,
  },
  {
    time: "07:51", at: "2026-11-27T07:51:00",
    title: "到站", emoji: "❤️", item: "一个拥抱",
    line: "07:51，V681 到站。\n11 小时 41 分，从北京到大连，830km，谢谢哥哥跨越山海来见我。\n下一次，换我走向你。",
    foot: "期待今晚的见面，哥哥好好休整一下，我一直在想念你~",
    note: "窗外 · 到站了——见面进度条加载到80%", sky: ["#a6d8f0", "#f7e7cc"], night: false,
  },
];

// 物品落在「她的座位」上的位置（百分比，x / y）
const ITEM_POS = [
  { x: 22, y: 58 }, { x: 74, y: 56 }, { x: 46, y: 70 }, { x: 86, y: 72 },
  { x: 12, y: 76 }, { x: 62, y: 84 }, { x: 30, y: 88 }, { x: 90, y: 44 },
  { x: 10, y: 54 }, { x: 52, y: 46 }, { x: 34, y: 62 }, { x: 70, y: 68 },
];

/* =========================================================
   逻辑
   ========================================================= */
const $ = (id) => document.getElementById(id);
const scenes = ["cover", "cabin", "arrive"].map($);

const params = new URLSearchParams(location.search);
const FORCE_LOCK = params.has("lock");
const DEMO = params.has("preview") || Date.now() < new Date(DEMO_UNTIL).getTime();

function slotTime(i) { return new Date(SLOTS[i].at).getTime(); }
function isUnlocked(i) {
  return (DEMO && !FORCE_LOCK) || Date.now() >= slotTime(i);
}

function show(id) {
  scenes.forEach((s) => { if (s) s.hidden = s.id !== id; });
  window.scrollTo(0, 0);
}

/* ---------- 已拆记录 ---------- */
const STORE_KEY = "train-cabin-v1";
const opened = new Set(loadOpened());

function loadOpened() {
  try {
    const arr = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    return Array.isArray(arr) ? arr.filter((n) => Number.isInteger(n) && n >= 0 && n < SLOTS.length) : [];
  } catch (e) {
    return [];
  }
}
function saveOpened() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(Array.from(opened))); } catch (e) {}
}

/* ---------- 声音（无外链，实时合成） ---------- */
let actx = null;
function beep(freq, dur, delay) {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    actx = actx || new AC();
    if (actx.state === "suspended") actx.resume();
    const t0 = actx.currentTime + (delay || 0);
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.09, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain);
    gain.connect(actx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  } catch (e) {}
}
const chime = () => { beep(660, 0.22, 0); beep(990, 0.3, 0.09); };
const arrivalChime = () => { beep(523, 0.28, 0); beep(659, 0.28, 0.12); beep(784, 0.45, 0.24); };

/* ---------- 轻提示 ---------- */
let toastEl = null;
let toastTimer = null;
function toast(msg) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
}

function fmtCountdown(ms) {
  if (ms <= 0) return "马上就好";
  const total = Math.ceil(ms / 60000);
  const h = Math.floor(total / 60);
  const m = total % 60;
  return h > 0 ? h + " 时 " + m + " 分" : m + " 分";
}

/* ---------- 渲染小格子 ---------- */
function renderLockers() {
  const ol = $("lockers");
  if (!ol) return;
  ol.innerHTML = "";
  SLOTS.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "locker";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.i = String(i);
    btn.innerHTML =
      '<span class="lk-time">' + s.time + "</span>" +
      '<span class="lk-face">🔒</span>' +
      '<span class="lk-title">还没到</span>';
    btn.addEventListener("click", () => onLockerClick(i));
    li.appendChild(btn);
    ol.appendChild(li);
  });
  refreshLockers();
}

function refreshLockers() {
  const btns = document.querySelectorAll("#lockers button");
  btns.forEach((btn) => {
    const i = Number(btn.dataset.i);
    const s = SLOTS[i];
    const isOpen = opened.has(i);
    const ready = isUnlocked(i);
    const li = btn.parentElement;
    const cls = "locker " + (isOpen ? "opened" : ready ? "ready" : "locked");
    if (li.className !== cls) li.className = cls;

    const face = isOpen ? s.emoji : ready ? "🎁" : "🔒";
    const label = isOpen ? s.title : ready ? "拆开" : "还没到";
    const faceEl = btn.querySelector(".lk-face");
    const titleEl = btn.querySelector(".lk-title");
    if (faceEl.textContent !== face) faceEl.textContent = face;
    if (titleEl.textContent !== label) titleEl.textContent = label;
  });
  updateStatus();
}

function updateStatus() {
  const el = $("status");
  if (!el) return;
  const n = opened.size;
  el.textContent = n >= SLOTS.length ? "12 / 12 · 到站了" : "已拆 " + n + " / " + SLOTS.length;
}

function updateHerSub() {
  const el = $("herSub");
  if (!el) return;
  const n = opened.size;
  el.textContent = n === 0
    ? "虚拟座位 · 就在你旁边"
    : n >= SLOTS.length
      ? "坐满了 · 到站了"
      : "座位上多了 " + n + " 样东西";
}

/* ---------- 物品落到座位上 ---------- */
function addItem(i, animate) {
  const box = $("seatItems");
  if (!box) return;
  const pos = ITEM_POS[i] || { x: 50, y: 70 };
  const span = document.createElement("span");
  span.className = "item" + (animate ? "" : " no-anim");
  span.dataset.i = String(i);
  span.textContent = SLOTS[i].emoji;
  span.style.left = pos.x + "%";
  span.style.top = pos.y + "%";
  box.appendChild(span);
}

function renderItems() {
  const box = $("seatItems");
  if (!box) return;
  box.innerHTML = "";
  Array.from(opened).sort((a, b) => a - b).forEach((i) => addItem(i, false));
}

/* ---------- 窗外的天 ---------- */
function updateSky(i) {
  const sky = $("windowSky");
  const note = $("windowNote");
  if (!sky) return;
  const idx = typeof i === "number" && i >= 0 ? i : 0;
  const s = SLOTS[idx];
  sky.style.background = "linear-gradient(180deg, " + s.sky[0] + ", " + s.sky[1] + ")";
  sky.classList.toggle("night", !!s.night);
  if (note) note.textContent = s.note;
}

function lastOpenedIndex() {
  let last = -1;
  opened.forEach((i) => { if (i > last) last = i; });
  return last;
}

/* ---------- 她的语音（audio/01.mp3 … 12.mp3，也支持 .m4a） ---------- */
const voiceEl = $("voice");
const voiceBtn = $("voiceBtn");
const voiceAudio = $("voiceAudio");
const voiceBar = $("voiceBar");
const voiceTime = $("voiceTime");

let voiceIndex = -1;
let voiceReady = false;
let voiceExt = 0;

const VOICE_EXTS = ["mp3", "m4a", "wav"];
const pad2 = (n) => (n < 10 ? "0" + n : String(n));
const voiceFile = (i, ext) => "audio/" + pad2(i + 1) + "." + ext;

function fmtSec(s) {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60);
  return m + ":" + (ss < 10 ? "0" + ss : String(ss));
}

function resetVoiceUI() {
  voiceEl.hidden = true;
  voiceReady = false;
  voiceBtn.dataset.state = "play";
  voiceBtn.setAttribute("aria-label", "播放语音");
  voiceBar.style.width = "0%";
  voiceTime.textContent = "0:00";
}

function stopVoice() {
  voiceIndex = -1;
  voiceExt = 0;
  try { voiceAudio.pause(); } catch (e) {}
  voiceAudio.removeAttribute("src");
  resetVoiceUI();
}

function tryPlayVoice() {
  const p = voiceAudio.play();
  if (p && p.catch) p.catch(() => {});
}

function loadVoice(i) {
  stopVoice();
  voiceIndex = i;
  voiceAudio.src = voiceFile(i, VOICE_EXTS[0]);
  voiceAudio.load();
  tryPlayVoice();
}

voiceAudio.addEventListener("loadedmetadata", () => {
  if (voiceIndex < 0) return;
  voiceReady = true;
  voiceEl.hidden = false;
  voiceTime.textContent = "0:00 / " + fmtSec(voiceAudio.duration);
});

voiceAudio.addEventListener("error", () => {
  if (voiceIndex < 0) return;
  voiceExt += 1;
  if (voiceExt < VOICE_EXTS.length) {
    voiceAudio.src = voiceFile(voiceIndex, VOICE_EXTS[voiceExt]);
    voiceAudio.load();
    tryPlayVoice();
    return;
  }
  voiceIndex = -1;
  resetVoiceUI();
});

voiceAudio.addEventListener("play", () => {
  voiceBtn.dataset.state = "pause";
  voiceBtn.setAttribute("aria-label", "暂停语音");
});
voiceAudio.addEventListener("pause", () => {
  voiceBtn.dataset.state = "play";
  voiceBtn.setAttribute("aria-label", "播放语音");
});
voiceAudio.addEventListener("timeupdate", () => {
  const d = voiceAudio.duration;
  if (!voiceReady || !isFinite(d) || d <= 0) return;
  voiceBar.style.width = Math.min(100, (voiceAudio.currentTime / d) * 100) + "%";
  voiceTime.textContent = fmtSec(voiceAudio.currentTime) + " / " + fmtSec(d);
});
voiceAudio.addEventListener("ended", () => {
  voiceBtn.dataset.state = "play";
  voiceBar.style.width = "0%";
  voiceTime.textContent = "0:00 / " + fmtSec(voiceAudio.duration);
});

voiceBtn.addEventListener("click", () => {
  if (!voiceReady) return;
  if (voiceAudio.paused) {
    if (voiceAudio.ended) voiceAudio.currentTime = 0;
    tryPlayVoice();
  } else {
    voiceAudio.pause();
  }
});

/* ---------- 开格子 ---------- */
let pendingIndex = null;
let pendingReplay = false;

function onLockerClick(i) {
  if (!isUnlocked(i)) {
    const d = slotTime(i) - Date.now();
    toast("这一格 " + SLOTS[i].time + " 才拆得开 · 还有 " + fmtCountdown(d));
    return;
  }
  openMoment(i, opened.has(i));
}

function openMoment(i, replay) {
  const s = SLOTS[i];
  pendingIndex = i;
  pendingReplay = replay;

  $("momentTime").textContent = s.time;
  $("momentTitle").textContent = s.title;
  $("momentLine").textContent = s.line;
  $("momentFoot").textContent = replay
    ? "这一格你已经拆过了，东西还在我座位上。"
    : "我座位上多了一样东西： " + s.emoji + " " + s.item;
  $("momentOk").textContent = replay ? "知道了" : "收下";
  $("moment").hidden = false;
  document.body.style.overflow = "hidden";

  loadVoice(i);
}

function closeMoment() {
  const i = pendingIndex;
  const replay = pendingReplay;
  pendingIndex = null;
  stopVoice();
  $("moment").hidden = true;
  document.body.style.overflow = "";

  if (i === null || replay) return;

  opened.add(i);
  saveOpened();
  addItem(i, true);
  updateHerSub();
  updateSky(i);
  refreshLockers();

  if (opened.size >= SLOTS.length) {
    setTimeout(() => {
      arrivalChime();
      show("arrive");
    }, 650);
  }
}

/* ---------- 上车 ---------- */
const boardBtn = $("boardBtn");
if (boardBtn) {
  boardBtn.addEventListener("click", () => {
    chime();
    show("cabin");
    renderLockers();
    renderItems();
    updateHerSub();
    updateSky(lastOpenedIndex());
  });
}

/* ---------- 弹层事件 ---------- */
$("momentOk").addEventListener("click", closeMoment);
$("momentClose").addEventListener("click", closeMoment);
$("moment").addEventListener("click", (e) => {
  if (e.target === $("moment")) closeMoment();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !$("moment").hidden) closeMoment();
});

/* ---------- 在一起第 N 天 ---------- */
(function setDays() {
  const el = $("daysTogether");
  if (!el) return;
  const a = new Date(TOGETHER_SINCE);
  const b = new Date(SHOW_DATE);
  a.setHours(0, 0, 0, 0);
  b.setHours(0, 0, 0, 0);
  el.textContent = String(Math.round((b - a) / 86400000) + 1);
})();

/* ---------- 每 15 秒刷新解锁状态 ---------- */
setInterval(() => {
  if (!$("cabin").hidden) refreshLockers();
}, 15000);

/* 初始：封面状态 */
updateSky(-1);
