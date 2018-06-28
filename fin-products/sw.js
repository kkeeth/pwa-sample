var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/public/sw.js'
];
self.addEventListener('fetch', function(event) {
  // インストール処理
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});