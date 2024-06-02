function* fn() {
  console.log("1");
  console.log("2");
  yield;
}
const f = fn();
console.log(f);
f.next();
