let compose = function (...args) {
  const init = args.pop();
  return function (...arg) {
    return args.reverse().reduce(function (sequence, func) {
      return sequence.then(function (result) {
        return func.call(null, result);
      });
    }, Promise.resolve(init.apply(null, arg)));
  };
};

let a = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("xhr1");
      resolve("xhr1");
    }, 5000);
  });
};

let b = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("xhr2");
      resolve("xhr2");
    }, 3000);
  });
};
let composeFn = compose(a, b);

composeFn(1, 2).then((res) => {
  console.log(666);
});
