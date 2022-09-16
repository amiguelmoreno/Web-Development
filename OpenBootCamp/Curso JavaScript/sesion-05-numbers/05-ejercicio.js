let altura = 183;
let alturaComa = 1.83;
let peso = 80.2;
let alturaRedondeada = Math.ceil(alturaComa);
let pesoRedondeado = Math.floor(peso);
var esIgualalmaximo;

if (Number.MAX_VALUE == Number.MAX_VALUE + 1) {
  esIgualalmaximo = true;
} else {
  esIgualalmaximo = false;
}

console.log(
  altura,
  alturaComa,
  peso,
  alturaRedondeada,
  pesoRedondeado,
  esIgualalmaximo
);
