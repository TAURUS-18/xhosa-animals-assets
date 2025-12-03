const CACHE = 'iziko-v1';
const files = [
  '/xhosa-animals-assets/',
  '/xhosa-animals-assets/index.html',
  '/xhosa-animals-assets/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(files)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
