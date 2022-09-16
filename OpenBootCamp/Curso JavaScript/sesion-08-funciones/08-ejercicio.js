function alwaysTrue() {
  return true;
}
console.log(alwaysTrue());

const mipromesa = new Promise((resolve, reject) => {
  setTimeout((resolve) => console.log("Hola, soy una promesa"), 5000);
});

function* generaId() {
  let id = 0;
  while (true) {
    id += 2;
    yield id; // Esperando hasta que se vuelva a llamar
  }
}

const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
