function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curring(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));

function curring(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
