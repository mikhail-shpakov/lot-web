// The app shell and its content, kept for offline reading. The list is filled in at build time.
const CACHE = 'lot-7854459f8b14'
const FILES = ["./","./assets/index-C991hqZd.js","./assets/index-B5qq2lew.css","./assets/marck_script-pnIyRllV.ttf","./assets/pt_serif_bold-B6NPSmF9.ttf","./assets/pt_serif_italic-BZI7irxP.ttf","./assets/pt_serif_regular-HIZd4K6A.ttf","./manifest.webmanifest","./logo.png","./icon-192.png","./apple-touch-icon.png"]

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('lot-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()))
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return
  // Pages: the network first, so a new version shows up; the cache when offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put('./', copy)); return r })
      .catch(() => caches.match('./')))
    return
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)))
})
