let datPers = {
  nombre: "Migue",
  apellido: "Moreno",
  edad: "21",
  altura: "183",
  eresDesarrollador: true,
};
let datPers1 = {
  nombre: "Laura",
  apellido: "Moreno",
  edad: "32",
  altura: "183",
  eresDesarrollador: true,
};
let datPers2 = {
  nombre: "Pedro",
  apellido: "Moreno",
  edad: "10",
  altura: "183",
  eresDesarrollador: true,
};

let edadPers = datPers.edad;
console.log(edadPers);

let listPers = [datPers, datPers1, datPers2];

let listPersSort = listPers.sort((a, b) => b.edad - a.edad);
console.log(listPers);
