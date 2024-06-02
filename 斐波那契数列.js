function Fibonacci(n = 1) {
  let n1 = 1,
      n2 = 1,
      arr = [];
  arr.push(n1, n2);
  if(n<=2)return arr
  for (let i = 2; i <= n; i++) {
    [n1, n2] = [n2, n1 + n2];
    arr.push(n2)
  }
  return arr
}


console.log(Fibonacci(10))
