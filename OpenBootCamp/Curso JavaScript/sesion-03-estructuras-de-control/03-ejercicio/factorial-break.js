let result = 1;
let i = 2;
while (true) {
  result *= i++;
  if (i > 10) {
    break;
  }
}
console.log(result);
