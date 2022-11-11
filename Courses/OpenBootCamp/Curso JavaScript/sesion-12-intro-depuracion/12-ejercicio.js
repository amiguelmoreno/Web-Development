function fibo(num) {
  let arr = [1, 1];
  for (i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

console.log(fibo(8));
