//固定函数某个参数，返回一个新的函数来接收剩下的变量参数。bind
//let fn3 = partial(fn1, 1, 2); fn3(3, 4)
function partial(fn, ...args) {
  return (...args2) => {
    return fn.apply(this, args.concat(args2));
  };
}

function compose(...fns) {
  if (!fns.length) return (v) => v;
  if (!fns.length === 1) return fns[0];
  return (...args) => {
    return fns.reduceRight((pre, cur) => {
      return cur(pre(...args));
    });
  };
}
