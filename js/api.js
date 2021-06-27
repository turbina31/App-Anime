'use strict';

const form = document.querySelector("aside form");
const input = document.querySelector("form input");
const msg = document.querySelector("form .msg");

let cont = document.querySelector("#contenido");



form.addEventListener("submit", e => {
    e.preventDefault();
    buscarAnime(input.value);
})
//window.addEventListener("load", paginaCargando);

async function buscarAnime(valor) {

    const url = `https://api.jikan.moe/v3/search/anime?q=${valor}&page=1`;

    try {
        const promesa = await fetch(url);
        let data = await promesa.json();

        actualizarDom(data);

    } catch (err) {
        console.info(err);
        msg.textContent = 'Ingresa un anime valido. Ejemplo Naruto', err;
    }
    msg.textContent = "";
    form.reset();
    input.focus();
}

async function actualizarDom(data) {

    const animeByCategories = data.results

        .reduce((acc, anime) => {

            const {
                type
            } = anime;
            if (acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

    cont.innerHTML = Object.keys(animeByCategories).map(key => {

        const animesHTML = animeByCategories[key]

            .sort((a, b) => a.episodes - b.episodes)
            .map(anime => {
                return `
                    <div class="card bg-dark p-0 m-2">
                        
                        <img class="card-image" src="${anime.image_url}">
                        
                        <div class="card-body text-primary card-img-overlay">
                            <h2>${anime.title}</h2>
                        </div>
                        <div class="footer">
                            <p>${anime.score}</p>
                            <a class="btn btn-primary rounded-circle link" href="${anime.url}" target="_blank">
                            <img src="img/icons/link.svg"></a>
                            <div class="dropdown">
                                <a class="dropdown-toggle bg-primary link2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="img/icons/sinopcis.svg">
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <h3 class="dropdown-item">${anime.title}</h3>
                                    <div class="dropdown-divider"></div>
                                    <p class="">${anime.synopsis}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }).join("");

        return `
                    <section class="div">${animesHTML}</section>   
            `
    }).join("");
}

// Escuchemos si esta online

document.addEventListener("escucharEvent", function(e) {
    e.preventDefault();
    buscarAnime(e);
  });