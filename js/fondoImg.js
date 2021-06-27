'use strict';
let images = [];
let index = 0

images[0] = "img/anime-multitud.jpg";
images[1] = "img/dragon-ball-super.jpg";
images[2] = "img/dragon-ball-z.jpg";
images[3] = "img/kimi-no-na-wa.jpg";
images[4] = "img/naruto.jpg";
images[5] = "img/naruto2.jpg";
images[6] = "img/naruto3.jpg";
images[7] = "img/naruto4.jpg";
images[8] = "img/pokemon.jpg";
images[9] = "img/pokemon2.jpg";
images[10] = "img/sword-art.jpg";

let aside = document.querySelector('#imagen');
let btn = document.querySelector('#cambiar');

btn.onclick = cambiar;

function cambiar() {
    index = Math.floor(Math.random() * images.length);
    aside.style.background = "url("+images[index]+") no-repeat";
    aside.style.backgroundSize = 'cover';
}