import { peliculas, agregarPelicula } from "./peliculas.js";




const peliculasAgregadas = peliculas;


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




// filtar por categoria
function filtrarPorCategoria(categoriaFiltro) {

    // array que guarda las peliculas filtradas
    let peliculasFiltradas = [];

    // Se filtran las peliculas que incluyan la categoria seleccionada dentro de la propiedad genero
    peliculasFiltradas = peliculasAgregadas.filter(pelicula => {
        let generoPelicula = pelicula.genero;
        return generoPelicula.includes(categoriaFiltro)
    })

    return mostrarPeliculas(peliculasFiltradas);
}



// Dropdown categorias
const dropdownCategorias = document.querySelectorAll('.dropdown-item');


// Seleccion de categoria - llama la funcion filtrarCategoria
dropdownCategorias.forEach(item => {
    item.addEventListener('click', ((event) => {
        // Prevenir el comportamiento por defecto del enlace
        event.preventDefault();

        // Capturar el valor del atributo 'data-value'
        const categoriaSeleccionada = item.getAttribute('data-value');

        if (categoriaSeleccionada == 'Todas') {
            // Se muestran todas las peliculas agregadas
            mostrarPeliculas(peliculasAgregadas)
        } else {
            // se filtra por la categoria seleccionada
            filtrarPorCategoria(categoriaSeleccionada);
        }

    }))
})



// Capturar el string desde la busqueda
const botonBuscar = document.getElementById('boton_buscar');

// Evento que dispara la funcion buscar
botonBuscar.addEventListener('click', (event) => {
    event.preventDefault();
    // se captura el valor del campo buscar
    const elementoBuscar = document.getElementById('input_buscar').value;
    // se llama a la funcion buscar pelicula, se establece elementoBuscar como argumento
    buscarPelicula(elementoBuscar)
})



// Funcion que busca una pelicula por el nombre
function buscarPelicula(stringBuscado) {

    // Array que guarda las peliculas que tienen coincidencia con el string buscado
    let peliculasEncontradas = [];

    // convertimos el string en array para facilitar la busqueda por palabras
    let arrayDelStringBuscado = stringBuscado.split(" ");
    // Capitalizamos la palabra, convirtiendo la primera letra en mayuscula, el resto en minuscula
    let arrayBuscadoCapitalizado = arrayDelStringBuscado.map(palabra => {
        // setear la primera letra en mayúscula y unirla con el resto de la palabra.
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })


    // Filtramos las peliculas que cumplan con la coincidencia de la palabra buscada
    peliculasEncontradas = peliculasAgregadas.filter(pelicula => {
        // se obtener el nombre de la pelicula
        let nombrePelicula = pelicula.nombre;
        // si almenos una palabra esta en el nombre de la pelicula
        return arrayBuscadoCapitalizado.some(palabra => {
            // si el nombre incluye alguna palabra se agrega a peliculasEncontradas
            return nombrePelicula.includes(palabra);
        })
    })

    mostrarPeliculas(peliculasEncontradas);

}


// // Generos

// peliculasAgregadas.forEach(pelicula => {
//     console.log(pelicula.genero);
// })