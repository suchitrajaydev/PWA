var cacheName = 'shell-content';
var filesToCache = ['/','app.js'];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
    var dataUrl = 'http://localhost:3000';
    if (e.request.url.indexOf(dataUrl) > -1) {
      e.respondWith(
        caches.open(cacheName).then(function(cache) {
          return fetch(e.request).then(function(response){
            cache.put(e.request.url, response.clone());
            return response;
          });
        })
      );
    } else {
      e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );
    }
});

