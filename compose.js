function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x * 2;
}

function compose(...fns) {
  if (!fns.length) return (v) => v;
  if (fns.length === 1) return fns[0];
  return fns.reduceRight((pre, cur) => {
    return (...args) => {
      return cur(pre(...args));
    };
  });
}
console.log(compose(fn1, fn2)(3));
