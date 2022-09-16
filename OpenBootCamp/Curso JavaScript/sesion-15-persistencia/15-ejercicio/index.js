let nombre = " Miguel";
let apellido = "Moreno";
let fullName = {
  nombre: nombre,
  apellido: apellido,
};
sessionStorage.setItem("fullName", JSON.stringify(fullName));
localStorage.setItem("fullName", JSON.stringify(fullName));

document.cookie =
  "cookieTest=Miguecookie;expires=" +
  new Date(new Date().getTime() + 2 * 60 * 1000);

console.log(JSON.parse(sessionStorage.getItem("fullName")));
