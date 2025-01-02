const PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED";

const handleValue = () => {};

class myPromise {
  constructor(executor) {
    this.status = undefined;
    this.value = undefined;
    this.reason = undefined;
    this.fulfilledCallback = [];
    this.rejectedCallback = [];
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.fulfilledCallback.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.rejectedCallback.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    let promise2 = new myPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        try {
          let x = onFulfilled(this.value);
          handleValue(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }
      if (this.status === REJECTED) {
        try {
          let x = onRejected(this.reason);
          handleValue(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }
      if (this.status === PENDING) {
        this.fulfilledCallback.push(() => {
          try {
            let x = onFulfilled(this.value);
            handleValue(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        this.rejectedCallback.push(() => {
          try {
            let x = onRejected(this.reason);
            handleValue(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return promise2;
  }
}

let p = new Promise((resolve, reject) => {
  resolve("1");
})
  .then(
    (res) => {},
    () => {}
  )
  .then(() => {});
