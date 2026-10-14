import './style.css'
import { strings } from './i18n.js'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)
const RING = 2 * Math.PI * 116

const DEFAULTS = { focus: 25, short: 5, long: 15, every: 4, auto: false, sound: true }
const load = (k, d) => {
  try { return { ...d, ...JSON.parse(localStorage.getItem(k)) } } catch { return d }
}

let lang = localStorage.getItem('lang') || 'id'
let settings = load('settings', DEFAULTS)
// Timer state is persisted so closing/reopening the app keeps the countdown going.
let state = load('state', { mode: 'focus', remaining: settings.focus * 60, endAt: null, done: 0 })
let tickId = null

const t = (k) => strings[lang][k]
const duration = (mode) => settings[mode] * 60
const saveState = () => localStorage.setItem('state', JSON.stringify(state))
const running = () => state.endAt !== null

/* ---------- rendering ---------- */

function applyLang() {
  document.documentElement.lang = lang
  $('#langBtn').textContent = lang === 'id' ? 'EN' : 'ID'
  $$('[data-i18n]').forEach((el) => (el.textContent = t(el.dataset.i18n)))
  $('#aboutContent').innerHTML = t('about')
  const q = t('quotes')
  $('#quote').textContent = q[Math.floor(Math.random() * q.length)]
  render()
}

function remainingNow() {
  return running() ? Math.max(0, Math.round((state.endAt - Date.now()) / 1000)) : state.remaining
}

function render() {
  const left = remainingNow()
  const mm = String(Math.floor(left / 60)).padStart(2, '0')
  const ss = String(left % 60).padStart(2, '0')
  $('#time').textContent = `${mm}:${ss}`
  document.title = running() ? `${mm}:${ss} · Fara Pomo` : 'Fara Pomo'

  const progress = 1 - left / duration(state.mode)
  const ring = $('#ringFg')
  ring.style.strokeDashoffset = RING * (1 - progress)
  ring.style.opacity = progress > 0 ? 1 : 0

  $('#phaseLabel').textContent = t({ focus: 'phaseFocus', short: 'phaseShort', long: 'phaseLong' }[state.mode])
  $('#startBtn').textContent = running()
    ? t('pause')
    : state.remaining < duration(state.mode) ? t('resume') : t('start')
  $('#startBtn').classList.toggle('is-running', running())

  document.body.dataset.mode = state.mode
  $$('.mode').forEach((b) => b.classList.toggle('active', b.dataset.mode === state.mode))

  const dots = $('#dots')
  dots.innerHTML = ''
  const filled = state.done % settings.every
  for (let i = 0; i < settings.every; i++) {
    const d = document.createElement('span')
    if (i < filled) d.className = 'on'
    dots.appendChild(d)
  }
}

/* ---------- timer ---------- */

function start() {
  ensureNotifPermission()
  unlockAudio()
  state.endAt = Date.now() + state.remaining * 1000
  saveState()
  loop()
}

function pause() {
  state.remaining = remainingNow()
  state.endAt = null
  saveState()
  stopLoop()
  render()
}

function loop() {
  stopLoop()
  tickId = setInterval(() => {
    if (remainingNow() <= 0) finish()
    else render()
  }, 250)
  render()
}

function stopLoop() {
  clearInterval(tickId)
  tickId = null
}

function setMode(mode, { keepRunning = false } = {}) {
  state.mode = mode
  state.remaining = duration(mode)
  state.endAt = null
  stopLoop()
  saveState()
  if (keepRunning) start()
  else render()
}

function nextMode() {
  if (state.mode !== 'focus') return 'focus'
  return state.done % settings.every === 0 ? 'long' : 'short'
}

function finish(notifyUser = true) {
  const wasFocus = state.mode === 'focus'
  if (wasFocus) state.done++
  if (notifyUser) {
    notify(t(wasFocus ? 'doneFocusTitle' : 'doneBreakTitle'), t(wasFocus ? 'doneFocusBody' : 'doneBreakBody'))
    chime()
    navigator.vibrate?.([200, 100, 200, 100, 300])
  }
  setMode(nextMode(), { keepRunning: settings.auto })
}

/* ---------- notifications ---------- */

const notifSupported = 'Notification' in window

function updateNotifBanner() {
  $('#notifBanner').classList.toggle('hidden', !notifSupported || Notification.permission !== 'default')
}

async function ensureNotifPermission() {
  if (!notifSupported || Notification.permission !== 'default') return
  const res = await Notification.requestPermission()
  if (res === 'denied') toast(t('notifDenied'))
  updateNotifBanner()
}

async function notify(title, body) {
  if (!notifSupported || Notification.permission !== 'granted') return
  const opts = {
    body,
    icon: '/pwa-192.png',
    badge: '/badge.png',
    tag: 'fara-pomo',
    renotify: true,
    vibrate: [200, 100, 200, 100, 300]
  }
  try {
    const reg = await navigator.serviceWorker?.getRegistration()
    if (reg) return reg.showNotification(title, opts)
  } catch {}
  try { new Notification(title, opts) } catch {}
}

/* ---------- sound ---------- */

let audioCtx
function unlockAudio() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (AC) audioCtx = new AC()
  }
  audioCtx?.resume?.()
}

function chime() {
  if (!settings.sound || !audioCtx) return
  const now = audioCtx.currentTime
  ;[659.25, 783.99, 1046.5].forEach((f, i) => {
    const o = audioCtx.createOscillator()
    const g = audioCtx.createGain()
    o.type = 'sine'
    o.frequency.value = f
    g.gain.setValueAtTime(0.0001, now + i * 0.18)
    g.gain.exponentialRampToValueAtTime(0.25, now + i * 0.18 + 0.02)
    g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.18 + 0.9)
    o.connect(g).connect(audioCtx.destination)
    o.start(now + i * 0.18)
    o.stop(now + i * 0.18 + 1)
  })
}

/* ---------- ui helpers ---------- */

let toastId
function toast(msg) {
  const el = $('#toast')
  el.textContent = msg
  el.classList.add('show')
  clearTimeout(toastId)
  toastId = setTimeout(() => el.classList.remove('show'), 2400)
}

function showView(name) {
  $$('.view').forEach((v) => v.classList.toggle('active', v.id === `view-${name}`))
  $$('.tab').forEach((b) => b.classList.toggle('active', b.dataset.view === name))
  history.replaceState(null, '', name === 'timer' ? location.pathname : `#${name}`)
  window.scrollTo({ top: 0 })
}

function openSheet() {
  $('#setFocus').value = settings.focus
  $('#setShort').value = settings.short
  $('#setLong').value = settings.long
  $('#setEvery').value = settings.every
  $('#setAuto').checked = settings.auto
  $('#setSound').checked = settings.sound
  $('#sheet').classList.add('open')
  $('#sheet').setAttribute('aria-hidden', 'false')
  $('#sheetBackdrop').classList.remove('hidden')
}

function closeSheet() {
  $('#sheet').classList.remove('open')
  $('#sheet').setAttribute('aria-hidden', 'true')
  $('#sheetBackdrop').classList.add('hidden')
}

const clamp = (v, lo, hi, d) => {
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d
}

/* ---------- events ---------- */

$('#startBtn').addEventListener('click', () => (running() ? pause() : start()))
$('#resetBtn').addEventListener('click', () => setMode(state.mode))
$('#skipBtn').addEventListener('click', () => finish(false))
$$('.mode').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)))
$$('.tab').forEach((b) => b.addEventListener('click', () => showView(b.dataset.view)))
$('#langBtn').addEventListener('click', () => {
  lang = lang === 'id' ? 'en' : 'id'
  localStorage.setItem('lang', lang)
  applyLang()
})
$('#notifBanner').addEventListener('click', ensureNotifPermission)
$('#settingsBtn').addEventListener('click', openSheet)
$('#sheetBackdrop').addEventListener('click', closeSheet)
$('#saveSettings').addEventListener('click', () => {
  settings = {
    focus: clamp($('#setFocus').value, 1, 120, DEFAULTS.focus),
    short: clamp($('#setShort').value, 1, 60, DEFAULTS.short),
    long: clamp($('#setLong').value, 1, 60, DEFAULTS.long),
    every: clamp($('#setEvery').value, 2, 10, DEFAULTS.every),
    auto: $('#setAuto').checked,
    sound: $('#setSound').checked
  }
  localStorage.setItem('settings', JSON.stringify(settings))
  if (!running()) setMode(state.mode)
  else render()
  closeSheet()
  toast(t('saved'))
})

// Browsers throttle timers in the background; re-sync as soon as the app is visible again.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && running()) {
    if (remainingNow() <= 0) finish()
    else loop()
  }
})

/* ---------- boot ---------- */

applyLang()
updateNotifBanner()
if (location.hash === '#about') showView('about')
if (running()) {
  if (remainingNow() <= 0) finish()
  else loop()
}
