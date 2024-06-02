function getPrimeNumber(n) {
  let arr = [];
  for (let i = 2, count = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) if (i % j === 0) count++;
    if(count === 2)arr.push(i);
    count = 0;
  }
  return arr
}
console.log(getPrimeNumber(100))