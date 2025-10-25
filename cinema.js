import { peliculas, agregarPelicula } from "./peliculas.js";

const peliculasAgregadas = peliculas;

var contadorId = 10;
peliculasAgregadas.map(pelicula => {
    pelicula.id = contadorId;
    contadorId++
})

console.log("Peliculas con ID");
console.log(peliculasAgregadas);


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
        divPelicula.setAttribute('id', `${pelicula.id}`);
        // atributo para que se obtenga solo el ID del div padre de la tarjeta
        // divPelicula.setAttribute("onclick", "obtenerIdPadre(event)");
        divPelicula.classList.add("col", "col-12", "col-xs-6", "col-sm-6", "col-md-6", "col-lg-2", "col-xl-2", "col-xxl-2", "py-2");

        divPelicula.innerHTML = `
            <div id="${pelicula.id}" class="movie_card position-relative h-100">
                <img src="${pelicula.img}"
                    class="w-100 h-100 rounded object-fit-cover img-fluid " alt="${pelicula.nombre}">
                <div id="${pelicula.id}" class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex rounded">
                    <div id="${pelicula.id}" class="px-2 pb-2 align-self-end text-start text-white ">
                        <h5 id="${pelicula.id}" class="p-0 m-0">${pelicula.nombre}</h5>
                        <p id="${pelicula.id}" class="p-0 m-0">${pelicula.year}</p>
                        <p id="${pelicula.id}" class="p-0 m-0">${pelicula.actores}</p>
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


// obtener id de la pelicula para mostrar el modal
const botonModalPelicula = document.addEventListener('click', function (event) {
    // elemento clickeado
    const elementoClickeado = event.target;
    // obtener el id del elemento clickeado
    const idElementoClickeado = elementoClickeado.id;
    console.log(`el id de la pelicula es ${idElementoClickeado}`);
    console.log(idElementoClickeado);

    // validar que el id corresponda a una pelicula
    try {
        // intentar convertir el string a numero
        let idNumero = Number(idElementoClickeado);
        if (idNumero > 0) {
            mostrarModalPelicula(idNumero);
        } else {
            console.log("el id no corresponde a una pelicula");
        }
    } catch (error) {
        console.error("no se pudo convertir el id a number");
    }
})



// Funcion Mostrar Modal por cada tarjeta
function mostrarModalPelicula(idPelicula) {
    // comprobar que el id de la peliucula 
    console.log("Se muestra modal");

    // Se obtiene el elemento del dom
    const divModal = document.getElementById('modal_pelicula');
    // Se crea la instancia del modal para poder utilizar los metodos de bootstrap y mostrar el modal
    const miModal = new bootstrap.Modal(divModal);

    // buscar la pelicula en el array de peliculasAgregadas
    let peliEncontrada = peliculasAgregadas.filter((pelicula) => pelicula.id === idPelicula)
    let peliculaEncontrada = peliEncontrada[0];


    // console.log(`Pelicula encontrada: ${peliculaEncontrada}`);
    // console.log(peliculaEncontrada);


    divModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Encabezado del modal -->
                <div class="modal-header">
                    <h3 class="modal-title" id="miModalLabel">${peliculaEncontrada.nombre}</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>

                <!-- Cuerpo del modal -->
                <div class="modal-body text-center d-flex flex-column justify-content-center ">
                <div class="d-flex justify-content-center bg-black rounded">
                    <div class="modal_imagen_container w-75 h-75" >    
                        <img src="${peliculaEncontrada.img}" alt="Imagen de la pelicula" class="">
                    </div>
                    </div>
                    <div class="pt-2">
                        <p class="text-start mb-0 pb-0 texto-modal"><strong>Sinapsis: </strong>${peliculaEncontrada.sinopsis}</p>
                        <p class="text-start mb-0 pb-0 texto-modal"><strong>Actores: </strong>${peliculaEncontrada.actores}</p>
                        <p class="text-start mb-0 pb-0 texto-modal"><strong>Genero: </strong>${peliculaEncontrada.genero}</p>
                    </div>
                </div>

                <!-- Pie del modal -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>

            </div>
        </div>
    `;

    // Se muestra el modal
    miModal.show();

}


// Prueba log peliculas x genero
// peliculasAgregadas.forEach(pelicula => {
//     console.log(pelicula.genero);
// })