const obj = {
  name: "111",
  age: "12",
};
const proxy = new Proxy(obj, {
  get(target, p, receiver) {
    return Reflect.get(target, p, receiver);
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target,key,newValue,receiver)
  },
});
proxy.age = 122;
proxy.name = 2222;
console.log(proxy);
function instanceOf(source,target) {
  if (!['function','object'].includes(typeof source)||source===null) return false
  let proto = Object.getPrototypeOf(source);
  while (true){
    if (proto===null)return false;
    if(proto===target.prototype)return true;
    proto = Object.getPrototypeOf(proto)
  }

}
