'use strict';

let btn1 = document.querySelector('.desc1');

btn1.onclick = dlBinAjax1;

function dlBinAjax1() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/12/89686.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Animegataris.jpg", "image/jpg");
    }
    x.send();
}

let btn2 = document.querySelector('.desc2');

btn2.onclick = dlBinAjax2;

function dlBinAjax2() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/9/87462.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Dame x Prince Anime Caravan.jpj", "image/jpg");
    }
    x.send();
}

let btn3 = document.querySelector('.desc3');

btn3.onclick = dlBinAjax3;

function dlBinAjax3() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/4/9224.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Lolita Anime.jpg", "image/jpg");
    }
    x.send();
}

let btn4 = document.querySelector('.desc4');

btn4.onclick = dlBinAjax4;

function dlBinAjax4() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/13/73567.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Animegatari2.jpg", "image/jpg");
    }
    x.send();
}

let btn5 = document.querySelector('.desc5');

btn5.onclick = dlBinAjax5;

function dlBinAjax5() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/7/84735.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Monster Strike Anime.jpg", "image/jpg");
    }
    x.send();
}

let btn6 = document.querySelector('.desc6');

btn6.onclick = dlBinAjax6;

function dlBinAjax6() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/3/77048.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Anitore! EX.jpg", "image/jpg");
    }
    x.send();
}

let btn7 = document.querySelector('.desc7');

btn7.onclick = dlBinAjax7;

function dlBinAjax7() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/1280/97009.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Ikebukuro PR Anime.jpg", "image/jpg");
    }
    x.send();
}

let btn8 = document.querySelector('.desc8');

btn8.onclick = dlBinAjax8;

function dlBinAjax8() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/1819/109679.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Anime Kapibara-san.jpg", "image/jpg");
    }
    x.send();
}

let btn9 = document.querySelector('.desc9');

btn9.onclick = dlBinAjax9;

function dlBinAjax9() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/1142/104288.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Momoiro Bouenkyou Anime Edition.jpg", "image/jpg");
    }
    x.send();
}

let btn10 = document.querySelector('.desc10');

btn10.onclick = dlBinAjax10;

function dlBinAjax10() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/3/75870.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "desperately to.jpg", "image/jpg");
    }
    x.send();
}

let btn11 = document.querySelector('.desc11');

btn11.onclick = dlBinAjax11;

function dlBinAjax11() {
    var x = new XMLHttpRequest();
    x.open("GET", 'https://cdn.myanimelist.net/images/anime/10/82252.jpg', true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, "Anitore! XX: Hitotsu Yane no Shita de.jpg", "image/jpg");
    }
    x.send();
}