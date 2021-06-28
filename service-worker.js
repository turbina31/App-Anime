// This is the "Offline copy of assets" service worker
// Inspired on Workbox: https://developers.google.com/web/tools/workbox/modules/workbox-sw

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.precaching.precacheAndRoute(['offline/offline.html',]);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  }),
  ({ event}) => event.request.mode=== 'navigate',({ url}) => fetch(url.href).catch(() => caches.match('offline/offline.html'))
);
