let nombre = "Migue";
let apellido = "Moreno";
let estudiante = nombre.concat(" ", apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let estudianteLen = estudiante.length;
let nombreFirst = nombre.charAt(0);
let apellidoLast = nombre.slice(-1);
let deleteSpaces = estudiante.replace(/ /g, "");
let foundName = estudiante.includes(nombre);

console.log(
  nombre,
  apellido,
  estudiante,
  estudianteMayus,
  estudianteMinus,
  estudianteLen,
  nombreFirst,
  apellidoLast,
  deleteSpaces,
  foundName
);
