let listaCompra = ["platanos", "manzanas", "tomates", "pimiemtos", "tulipanes"];
listaCompra.push("Aceite de girasol");
console.log(listaCompra);
listaCompra.pop("Aceite de girasol");
console.log(listaCompra);

let pelisFav = [
  {
    titulo: "Interestellar",
    director: "Matrin J Brown",
    fecha: 2008,
  },
  {
    titulo: "It",
    director: "Juan J Brown",
    fecha: 2015,
  },
  {
    titulo: "Interestellar",
    director: "Pepe J Brown",
    fecha: 2019,
  },
];
const fechaPelis = pelisFav.filter((movie) => movie.fecha > 2010);
console.log(fechaPelis);
const directoresPelis = pelisFav.map((movie) => movie.director);
console.log(directoresPelis);
const tituloPelis = pelisFav.map((movie) => movie.titulo);
console.log(tituloPelis);
let directoresTitulo = directoresPelis.concat(tituloPelis);
console.log(directoresTitulo);
let directoresTituloPropagacion = [...directoresPelis, ...tituloPelis];
console.log(directoresTituloPropagacion);
