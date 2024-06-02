let data = {
  num: 1,
  str: "1",
  age: null,
  class: undefined,
  bool: true,
  date: new Date(),
  reg: /s+/,
  arr: [1, 2, 3],
  obj: {},
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3]),
  fn: function () {},
};
function isObject(target) {
  return (typeof target === "object" && target) || typeof target === "function";
}

function getType(target) {
  return Reflect.toString.call(target).slice(8, -1);
}
function deepClone(target, hash = new WeakMap()) {
  if (!isObject(target)) return target;
  const type = getType(target);
  if (["Date", "RegExp"].includes(type)) {
    return new target.constructor();
  }
  if (type === "Function") {
    return new Function("return " + target.toString())();
  }
  if (hash.get(target)) return hash.get(target);
  if (type === "Map") {
    let result = new Map();
    target.forEach((value, key) => {
      result.set(key, deepClone(value, hash));
    });
    return result;
  }
  if (type === "Set") {
    let result = new Set();
    target.forEach((value) => {
      result.add(deepClone(value, hash));
    });
    return result;
  }
  const keys = Reflect.ownKeys(target);
  const allDesc = Reflect.getOwnPropertyDescriptor(target);
  const result = Object.create(Reflect.getPrototypeOf(target), allDesc);
  hash.set(target, result);
  keys.forEach((key) => {
    result[key] = deepClone(target[key], hash);
  });
  return result;
}
// let res = JSON.parse(JSON.stringify(data));
data.obj1 = data;
let res = deepClone(data);
console.log(res);
