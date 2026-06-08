const CACHE_NAME = 'festas-ourense-2026-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css?v=202606081820',
  './app.js?v=202606081820',
  './manifest.json',
  './assets/background.jpg',
  './assets/cover.jpg',
  './assets/logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/favicon.ico'
];

// Install Service Worker and cache all essential assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch handler: Stale-While-Revalidate for code assets, Cache-First for static assets
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  const isCodeAsset = url.pathname.endsWith('/') || 
                      url.pathname.endsWith('.html') || 
                      url.pathname.endsWith('.js') || 
                      url.pathname.endsWith('.css');

  if (isCodeAsset) {
    // Stale-While-Revalidate
    e.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(e.request).then((cachedResponse) => {
          const fetchPromise = fetch(e.request).then((networkResponse) => {
            if (networkResponse.status === 200) {
              cache.put(e.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => cachedResponse);
          return cachedResponse || fetchPromise;
        });
      })
    );
  } else {
    // Cache-First
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(e.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
