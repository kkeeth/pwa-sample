var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  './index.html',
  '/public/sw.js'
];

self.addEventListener('fetch', (event) => {
  // インストール処理
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});