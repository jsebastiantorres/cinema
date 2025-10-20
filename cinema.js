import { peliculas, agregarPelicula } from "./peliculas.js";




const peliculasAgregadas = peliculas;
const peliculasPorMostrar = []

// elemento del DOM donde se mostrara el listado de las peliculas
const elementoListaPeliculas = document.getElementById('listado_peliculas');

// Mostrar las películas en el DOM en un grid de 4 columnas centrado
function mostrarPeliculas(peliculasAgregadas) {
    // Limpia el contenido anterior del contenedor
    elementoListaPeliculas.innerHTML = '';

    peliculasAgregadas.forEach(pelicula => {
        const divPelicula = document.createElement('div');

        // Clases de Bootstrap para un grid responsive centrado y mediano:
        // col-12: 1 columna en móvil (<576px)
        // col-md-6: 2 columnas en tabletas (>=768px)
        // col-lg-3: 4 columnas en escritorio (>=992px)
        // mb-4: margen inferior
        divPelicula.classList.add("col", "col-12", "col-xs-6", "col-sm-6", "col-md-6", "col-lg-2", "col-xl-2", "col-xxl-2", "py-2");

        divPelicula.innerHTML = `
            <div class="movie_card position-relative h-100">
                <img src="${pelicula.img}"
                    class="w-100 h-100 rounded object-fit-cover img-fluid " alt="${pelicula.nombre}">
                <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex rounded">
                    <div class="px-2 pb-2 align-self-end text-start text-white ">
                        <h5 class="p-0 m-0">${pelicula.nombre}</h5>
                        <p class="p-0 m-0">${pelicula.year}</p>
                        <p class="p-0 m-0">${pelicula.actores}</p>
                    </div>
                </div>
            </div>
        `;
        elementoListaPeliculas.appendChild(divPelicula);
    });
}

mostrarPeliculas(peliculasAgregadas);

console.log(peliculasAgregadas);




// Variable para filtrar peliculas
const generoFiltrar = 'Drama';


// filtar por categoria
function filtrarPorCategoria(peliculasAgregadas, generoFiltrar) {

    let peliculasFiltradas = [];

    peliculasAgregadas.forEach(pelicula => {
        let generoIteracion = pelicula.genero;
        let coincide = generoIteracion.includes(generoFiltrar);
        if (coincide) {
            peliculasFiltradas.push(pelicula)
            console.log("Coincidencia");
        }
    });

    console.log("Generos de peliculas filtradas");
    console.log(peliculasFiltradas);
}


// Dropdown categorias
const dropdownCategorias = document.querySelectorAll('.dropdown-item');
const toggleButton = document.getElementById('dropdown_categorias');


dropdownCategorias.forEach(item => {
    item.addEventListener('click', ((event) => {
        // Prevenir el comportamiento por defecto del enlace
        event.preventDefault();

        // Capturar el valor del atributo 'data-value'
        const categoriaSeleccionada = item.getAttribute('data-value');

        console.log(categoriaSeleccionada);
        
    }))
})




// // Generos
// filtrarPorCategoria(peliculasAgregadas, generoFiltrar);

// peliculasAgregadas.forEach(pelicula => {
//     console.log(pelicula.genero);
// })