let fechaHoy = new Date();
console.log(fechaHoy);
let fechaNac = new Date(2000, 7, 5);
console.log(fechaNac);
let isLater = fechaHoy > fechaNac;
console.log(isLater);
let birthMonth = fechaNac.getMonth() + 1;
console.log(birthMonth);
let birthYear = fechaNac.getFullYear();
console.log(birthYear);