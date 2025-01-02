function call(context = window, ...args) {
  let fn = Symbol("fn");
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
}


function apply(context = window, args) {
  let fn = Symbol("fn");
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
}


function bind(context, ...outerArgs) {
  let self = this
  return function F(...innerArgs) {
    return self.apply(context, [...outerArgs, ...innerArgs])
  }
}
