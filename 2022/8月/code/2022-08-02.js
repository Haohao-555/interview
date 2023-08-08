const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.resolveQueue = [];
    this.rejectQueue = [];
    let resolve = (val) => {
      if (this.status !== PENDING) return;

      this.status = FULFILLED;

      while (this.resolveQueue.length) {
        let callback = this.resolveQueue.shift();
        callback(val);
      }
    }

    let reject = (val) => {
      if (this.status !== PENDING) return;

      this.status = REJECTED;

      while (this.rejectQueue.length) {
        let callback = this.rejectQueue.shift();
        callback(val);
      }
    }
    executor(resolve, reject);
  }
  then = (resolveFunc, rejectFunc) => {
    return new MyPromise((resolve, reject) => {
      let successFunc = (val) => {
        try {
          let x = resolveFunc(val);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      }
      this.resolveQueue.push(successFunc);

      let errorFunc = (error) => {
        try {
          let x = rejectFunc(error);
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x);
        } catch (error) {
          reject(error);
        }
      }
      this.rejectQueue.push(errorFunc);
    })
  }
}
// 测试
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500);
})

p1.then(res => {
  console.log(res)
  return 2
}).then(res => {
    console.log(res)
    return 3
}).then(res => {
    console.log(res)
})
//输出 1 2 3