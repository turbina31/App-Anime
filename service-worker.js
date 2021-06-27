// Nombre del Cache:
const cacheName = 'cache-version-1';

// Archivos/Recursos que vamos a "cachear"
const precache = [
  './js/main.js',
  './css/estilos.css',
  './css/material-kit.css',
  './index.html',
  './offline.html',
  './pacman-master/css/pacman.css',
  './pacman-master/js/pacman.js',
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

// Instalación
self.addEventListener('install', event => {

  // Hago a este SW el activo, matando otros
  // Sino quedan caches inactivos 
  self.skipWaiting();

  event.waitUntil(
      // Abro el cache, entonces agrego los archivos/recursos
      caches.open(cacheName).then(cache => {
        return cache.addAll(precache)
      })
  );
});


// Update - Es decir, si cambia una parte del SW (nombre), updatea el cache 
self.addEventListener('activate', event => {

  const cacheWhitelist = [cacheName];

  // Esto es lo que updatea cada una de las keys en el mapa del caché
  event.waitUntil(
      // Tomo las keys y las paso para revisar individualmente
      caches.keys().then(cacheNames => {
        // devuelvo Promesa
        return Promise.all(
            // Hago un map, para borrar key individualmente.
            // Recuerden que era el update, asi que precisa un delete.
            cacheNames.map(cacheName => {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
        )
      })
  );
});


// Chequeamos la response
function shouldAcceptResponse(response) {
    return response.status !== 0 && !(response.status >= 400 && response.status < 500) || 
        response.type === 'opaque' || 
        response.type === 'opaqueredirect';
}

// Creamos el cache a partir de fetch de recursos
self.addEventListener('fetch', event => {
  // Chequeamos si existe en cache para el render de pagina
  // sino vamos a hacer cache del nuevo request
  event.respondWith(
      caches.open(cacheName).then(cache => { // Abrimos el cache actual
        return cache.match(event.request).then(response => {
          
          // Matcheo! - return response, se lo pasamos al promise abajo
          if (response) {
            return response;
          }

        // Tomamos el response cache de arriba
        return fetch(event.request).then(
          function(response) {

            // Chequeamos si recibimos una respuesta valida
            if(shouldAcceptResponse(response)) {
              return response;
            }

            // Hay que clonar la respuesta
            // La respuesta es un stream, y como queremos que el browser
            // consuma la respuesta como si el cache consumiera la respuesta,
            // necesitamos clonarla para asi tener dos streams: (https://streams.spec.whatwg.org/)
            var responseToCache = response.clone();

            // Aca lo que hace es guardar los recursos que vinieron del server
            caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        )
        }).catch(error => {
          console.info('Fallo Servise Worket', error); // importantisimo para saber si tenemos un error en algun lado.
          // si el cache falla, mostramos offline page
          return caches.match('offline.html');
        });
      })
  );
});
