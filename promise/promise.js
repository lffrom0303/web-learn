new Promise((resolve, reject) => {
  console.log(1);
  resolve("2222222");
})
  .then((res) => {
    // return new Promise((resolve, reject) => {
    //   resolve(res);
    // });
    // return 2222;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("sadasdas");

let p = new myPromise((resolve, reject) => {});
class myPromise {
  constructor(executor) {
    const resolve = () => {};
    const reject = () => {};
    executor(resolve, reject);
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
  then(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => {
      onFulfilled();
    });
  }
}
