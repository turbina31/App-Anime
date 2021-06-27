// Chequeo si el browser puede usar Service Worker
window.addEventListener("load", () => {
  // Chequeo si el browser puede usar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js')
      .then(reg => {
        console.log("Service worker esta listo!");
      });
}
else {
  console.log("Service worker no soportado.");
}

// Event Listener para Offline/ Online Status
window.addEventListener('offline', event => {
  let main = document.querySelector('.section-notifications').classList.add('offline');
  main.innerHTML = "<p>La aplicacion esta offline!</p>"
});

window.addEventListener('online', event => {
  document.querySelector('.section-notifications').classList.remove('offline');
  buscarAnime(event);
});

// A veces este evento falla, ojo!
// Sirve para saber si el navegador esta offline, cuando entramos offline. 
// Es decir, no se disparo los eventos de arriba aun, y necesito conocer el estado.
// if (!navigator.onLine) {

if (!navigator.onLine) {
  document.querySelector('.section-notifications').classList.add('offline');
}
});
