import peliculas from './peliculas.js'

const baseURL = "https://image.tmdb.org/t/p/w500";

function mostrarPeliculasPorGenero(generoId, contenedorId) {
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));

    const contenedor = document.getElementById(contenedorId);

    peliculasFiltradas.forEach(pelicula => {

        const peliculaDiv = document.createElement("div");
        peliculaDiv.classList.add("pelicula");

        const imagen = document.createElement("img");
        imagen.src = `${baseURL}${pelicula.poster_path}`;
        imagen.alt= pelicula.title;
        imagen.classList.add("pelicula-imagen");

        const titulo = document.createElement("h3");
        titulo.textContent = pelicula.title;
        titulo.classList.add("pelicula-titulo");

        peliculaDiv.appendChild(imagen);
        peliculaDiv.appendChild(titulo);

        contenedor.appendChild(peliculaDiv);
    });
}
console.log(mostrarPeliculasPorGenero(28, "genero-28"));
console.log(mostrarPeliculasPorGenero(53, "genero-53"));
console.log(mostrarPeliculasPorGenero(12, "genero-12"));
