// The app shell and its content, kept for offline reading. The list is filled in at build time.
const CACHE = '__CACHE__'
const FILES = __FILES__

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
