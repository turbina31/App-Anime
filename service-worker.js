// Nombre del Cache
const offline_version = 1;

// Archivos/Recursos que vamos a "cachear"
const cache_name = [
  './js/main.js',
  './css/estilos.css',
  './css/material-kit.css',
  './index.html',
  './offline/offline.html',
  './offline/style.css',
  './offline/app.js',
  './offline/images/',
  './offline/images/blue.png',
  './offline/images/candy-crush-background.jpg',
  './offline/images/green.png',
  './offline/images/orange.png',
  './offline/images/purple.png',
  './offline/images/red.png',
  './offline/images/yellow.png',
  "./img/dragon-ball-super.jpg",
  "./img/kimi-no-na-wa.jpg",
  "./img/naruto.jpg",
  "./img/naruto2.jpg",
  "./img/naruto3.jpg",
  "./img/pokemon.jpg",
  "./img/pokemon2.jpg",
  "./img/sword-art.jpg",
  "./img/icons/logo192x192.png",
  "./img/icons/logo512x512.png",
  "./img/icons/inicio.png",
  "./img/descarga.png",
  "./img/icons/video.png",
  "./img/icons/inicio.svg",
  "./img/descarga.svg",
  "./img/icons/video.svg",
  './img/icons/enviar.svg',
  './img/icons/link.svg',
  './img/icons/sinopcis.svg',
  './js/material-kit.js',
  './js/api.js',
  './js/core/bootstrap-material-design.min.js',
  './js/core/jquery.min.js',
  './js/core/popper.min.js'
];
const offline_url = 'offline/offline.html';
// Instalación
self.addEventListener('install', event => {

  event.waitUntil(
      (async () => {
        const cahe = await caches.open(cache_name);
        await cache.add(new Request(offline_url,{
          cache: "reload"
        }));
      })
  );
  self.skipWaiting();
});


// Update - Es decir, si cambia una parte del SW (nombre), updatea el cache 
self.addEventListener('activate', event => {

  // Esto es lo que updatea cada una de las keys en el mapa del caché
  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode == "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          const networkResponse = await fetch(event.request);
          return networkResponse;
        }catch (error){
          const cache = await caches.open(cache_name);
          const cachedResponse = await cache.match(offline_url);
          return cachedResponse;
        }
      })
    )
  }
})
