Function.prototype.myCall = function (context = window, ...args) {
  if (typeof context !== "object") context = new Object(context);
  let fnKey = Symbol();
  context[fnKey] = this;
  let result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};
