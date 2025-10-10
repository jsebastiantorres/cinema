

// array peliculas
export const peliculas = [];


// Funcion para agregar pelicula al listado
export function agregarPelicula(nombre, genero, year, img, sinopsis, actores, review) {
  const pelicula = {
    nombre: nombre,
    genero: genero,
    year: year,
    img: img,
    sinopsis: sinopsis,
    actores: actores,
    review: review
  };

  peliculas.push(pelicula);
}

agregarPelicula(
  "Oppenheimer",
  "Drama / Histórico",
  2023,
  "https://www.peacocktv.com/dam/growth/assets/Campaign/P1/oppenheimer/oppenheimer-vertical-key-art.jpg?downsize=1200:*&image-quality=7&output-format=webp&output-quality=70",
  "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.",
  "Cillian Murphy, Emily Blunt, Matt Damon",
  "Una obra intensa y visualmente poderosa que explora dilemas éticos y científicos."
);

agregarPelicula(
  "Barbie",
  "Comedia / Fantasía",
  2023,
  "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  "Barbie emprende un viaje desde Barbieland al mundo real para descubrir su propósito.",
  "Margot Robbie, Ryan Gosling, America Ferrera",
  "Colorida, divertida y sorprendentemente reflexiva sobre identidad y feminismo."
);

agregarPelicula(
  "The Creator",
  "Ciencia Ficción / Acción",
  2023,
  "https://m.media-amazon.com/images/M/MV5BMDkxMTUxOTQtYzM4Yi00YzA2LTgzOTYtNDg2NTliODE0ZTRjXkEyXkFqcGc@._V1_.jpg",
  "En un futuro en guerra con la IA, un exsoldado debe proteger a una niña que podría cambiar el destino del mundo.",
  "John David Washington, Gemma Chan, Ken Watanabe",
  "Visualmente impresionante, con una narrativa que mezcla emoción y dilemas tecnológicos."
);

agregarPelicula(
  "Killers of the Flower Moon",
  "Crimen / Drama / Histórico",
  2023,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeC_XS_aXoT9aEI-Dozh_S4wI3eG3sEZzNw&s",
  "Basada en hechos reales, narra los asesinatos de miembros de la Nación Osage en los años 20.",
  "Leonardo DiCaprio, Robert De Niro, Lily Gladstone",
  "Un thriller histórico profundo y conmovedor dirigido por Martin Scorsese."
);

agregarPelicula(
  "Five Nights at Freddy's",
  "Terror / Suspenso",
  2023,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUEaT2uDVejpG4c40ft_eJLOVmmox8byh_w&s",
  "Un guardia de seguridad nocturno descubre que los animatrónicos de una pizzería están poseídos.",
  "Josh Hutcherson, Elizabeth Lail, Matthew Lillard",
  "Adaptación fiel al videojuego, con atmósfera inquietante y momentos de tensión."
);

agregarPelicula(
  "Dune: Parte Dos",
  "Ciencia ficción / Aventura",
  2024,
  "https://m.media-amazon.com/images/M/MV5BNzBiMTQ0YjMtZDRhMC00ZDU4LTk3MDMtNWQxOGMwMjQzYjc4XkEyXkFqcGc@._V1_.jpg",
  "Paul Atreides une fuerzas con los Fremen para vengar a su familia.",
  "Timothée Chalamet, Zendaya",
  "Épica visual con poder político y espiritual."
);

agregarPelicula(
  "Napoleon",
  "Drama / Histórico / Bélico",
  2023,
  "https://m.media-amazon.com/images/M/MV5BZmZmZWFjNmYtNzEwYy00OTg2LWJkNGYtNTE2NGU5ZmZhNzJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "La historia del ascenso y caída de Napoleón Bonaparte.",
  "Joaquin Phoenix, Vanessa Kirby",
  "Una epopeya visual sobre poder, ambición y guerra."
);

agregarPelicula(
  "Wish",
  "Animación / Fantasía / Familia",
  2023,
  "https://upload.wikimedia.org/wikipedia/en/d/de/WishMoviePoster.jpg",
  "Una joven desea cambiar su destino en un reino mágico.",
  "Ariana DeBose, Chris Pine",
  "Colorida y encantadora con mensaje inspirador."
);

agregarPelicula(
  "The Hunger Games: The Ballad of Songbirds & Snakes",
  "Ciencia ficción / Drama",
  2023,
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/The_Hunger_Games_-_The_Ballad_of_Songbirds_%26_Snakes_official_poster.jpg/250px-The_Hunger_Games_-_The_Ballad_of_Songbirds_%26_Snakes_official_poster.jpg",
  "La historia de origen del presidente Snow en los primeros Juegos del Hambre.",
  "Tom Blyth, Rachel Zegler",
  "Oscura y política, con tensión y traición."
);

agregarPelicula(
  "Mission: Impossible – Dead Reckoning Part One",
  "Acción / Suspenso",
  2023,
  "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg",
  "Ethan Hunt debe enfrentar una inteligencia artificial descontrolada.",
  "Tom Cruise, Hayley Atwell",
  "Acción trepidante con acrobacias espectaculares."
);

agregarPelicula(
  "Indiana Jones and the Dial of Destiny",
  "Aventura / Acción",
  2023,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2i4uu9jGtWqzWSukEDfO7_w7ly-yLh5YWA&s",
  "Indiana Jones regresa para una última aventura en busca de un artefacto misterioso.",
  "Harrison Ford, Phoebe Waller-Bridge",
  "Nostalgia y acción clásica con un toque moderno."
);

agregarPelicula(
  "Elemental",
  "Animación / Fantasía / Romance",
  2023,
  "https://lumiere-a.akamaihd.net/v1/images/image_def91c72.jpeg?region=0,0,540,810",
  "En una ciudad donde conviven fuego, agua, tierra y aire, dos elementos opuestos se enamoran.",
  "Leah Lewis, Mamoudou Athie",
  "Visualmente encantadora y emocionalmente cálida."
);

agregarPelicula(
  "The Flash",
  "Acción / Ciencia ficción",
  2023,
  "https://m.media-amazon.com/images/M/MV5BYTY0YjQ5Y2EtNDJiYi00ZjMwLWFmMTYtNzc2YzZkZWQzZjU4XkEyXkFqcGc@._V1_.jpg",
  "Barry Allen viaja en el tiempo para salvar a su madre, pero altera el multiverso.",
  "Ezra Miller, Michael Keaton",
  "Una mezcla de nostalgia, caos y velocidad."
);

agregarPelicula(
  "Transformers: Rise of the Beasts",
  "Acción / Ciencia ficción",
  2023,
  "https://images-cdn.ubuy.co.in/6497d4ce0ec269313f606630-transformers-rise-of-the-beasts-2023.jpg",
  "Optimus Prime y los Autobots se enfrentan a una nueva amenaza: los Terrorcons.",
  "Anthony Ramos, Dominique Fishback",
  "Explosiva y llena de criaturas robóticas."
);

agregarPelicula(
  "John Wick: Chapter 4",
  "Acción / Suspenso",
  2023,
  "https://i-viaplay-com.akamaized.net/viaplay-prod/490/240/1685440253-b97085fb4a89467145afcae8287bcaa50c00f46f.jpg?width=400&height=600",
  "John Wick lucha contra la Alta Mesa mientras busca su libertad.",
  "Keanu Reeves, Donnie Yen",
  "Coreografías brutales y estilo visual impecable."
);

agregarPelicula(
  "Creed III",
  "Drama / Deporte",
  2023,
  "https://m.media-amazon.com/images/M/MV5BOWY0MTRmY2YtMzBlYi00NjlkLThkZWYtMmE2NzJiZmIzODFkXkEyXkFqcGc@._V1_.jpg",
  "Adonis Creed enfrenta a un viejo amigo convertido en rival.",
  "Michael B. Jordan, Jonathan Majors",
  "Intensa y emocional con fuerza física y personal."
);

agregarPelicula(
  "The Super Mario Bros. Movie",
  "Animación / Aventura / Comedia",
  2023,
  "https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
  "Mario y Luigi son transportados a un mundo mágico donde deben enfrentarse a Bowser.",
  "Chris Pratt, Anya Taylor-Joy, Jack Black",
  "Una adaptación vibrante y divertida del clásico videojuego."
);

agregarPelicula(
  "Evil Dead Rise",
  "Terror / Suspenso",
  2023,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD9y8NHPb7USkKJN2n-Nrz15gBjOhJN3V1A&s",
  "Dos hermanas descubren un vinilo maldito que desata demonios sedientos de sangre.",
  "Lily Sullivan, Alyssa Sutherland",
  "Terror visceral con una atmósfera claustrofóbica y momentos impactantes."
);

agregarPelicula(
  "The Marvels",
  "Acción / Ciencia ficción",
  2023,
  "https://lumiere-a.akamaihd.net/v1/images/the_marvels_-_poster_nuevo_bc3dce8d.jpeg?region=0,0,800,1000",
  "Carol Danvers, Kamala Khan y Monica Rambeau",
  "Deben unir fuerzas para enfrentar una amenaza intergaláctica"
)

agregarPelicula(
  "TRON: Ares",
  "Ciencia ficción / Acción",
  2025,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKgdZ4lqHU5JOYhjh1pZ9_vzFftA4WiHv-Q&s",
  "La humanidad se enfrenta por primera vez a seres creados por inteligencia artificial en un mundo digital.",
  "Jared Leto, Jeff Bridges",
  "Visualmente deslumbrante, con una narrativa que explora los límites entre lo humano y lo artificial."
);

agregarPelicula(
  "El conjuro: Últimos ritos",
  "Terror / Sobrenatural",
  2025,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRzOE4NKSTs4ZCdWWu927py3TFhJvcJNwzw&s",
  "La familia Warren se enfrenta a su caso más oscuro en una iglesia abandonada marcada por rituales demoníacos.",
  "Patrick Wilson, Vera Farmiga",
  "Una entrega intensa que mezcla horror clásico con nuevos elementos rituales y religiosos."
);

agregarPelicula(
  "Una película de Minecraft",
  "Aventura / Fantasía",
  2025,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xvglmzqyTvtjGZvbk5AfIOqJuF1o90et3g&s",
  "Un joven se embarca en una misión épica para salvar su mundo pixelado de una fuerza destructiva.",
  "Jack Black, Danielle Brooks",
  "Divertida y creativa, ideal para fans del videojuego y nuevas generaciones."
);

agregarPelicula(
  "Jurassic World: Renacimiento",
  "Ciencia ficción / Aventura",
  2025,
  "https://pics.filmaffinity.com/Jurassic_World_El_renacer-952524729-large.jpg",
  "Un nuevo experimento genético revive especies aún más peligrosas, desatando el caos en un parque renovado.",
  "Bryce Dallas Howard, Chris Pratt",
  "Acción trepidante con efectos visuales impresionantes y una trama que reinventa la saga."
);

agregarPelicula(
  "¡Estáis cordialmente invitados!",
  "Comedia / Romance",
  2025,
"https://assets.cineol.net/qo55tftl0c40d0widzvmx7iib73q",
  "Dos familias opuestas intentan organizar una boda perfecta, desatando una serie de divertidos enredos.",
  "Will Ferrell, Reese Witherspoon",
  "Una comedia ligera con química entre los protagonistas y situaciones hilarantes."
);


console.log(peliculas);
