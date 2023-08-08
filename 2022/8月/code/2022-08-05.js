const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.val = null;
    this.resolveQueue = [];
    this.rejectQueue = [];

    let resolve = (val) => {
      const run = () => {
        if (this.status !== PENDING) return;

        this.status = FULFILLED;
        this.val = val;

        while (this.resolveQueue.length) {
          let callback = this.resolveQueue.shift();
          callback(val);
        }
      }
      setTimeout(run);
    }

    let reject = (val) => {
      const run = () => {
        if (this.status !== PENDING) return;

        this.status = REJECTED;
        this.val = val;

        while (this.rejectQueue.length) {
          let callback = this.rejectQueue.shift();
          callback(val);
        }
      }
      setTimeout(run);
    }
    executor(resolve, reject)
  }
  then = (resolveFunc, rejectFunc) => {
    return new MyPromise((resolve, reject) => {
      typeof resolveFunc !== 'function' ? resolveFunc = val => val : null;
      typeof rejectFunc !== 'function' ? rejectFunc = reason => {
        throw new Error(reason instanceof Error ? reason.message : reason);
      } : null;

      let successFunc = (val) => {
        try {
          let x = resolveFunc(val);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (e) {
          reject(e);
        }
      }
      let errorFunc = (val) => {
        try {
          let x = rejectFunc(val);
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x)
        } catch (e) {
          reject(e);
        }
      }

      switch (this.status) {
        case PENDING:
          this.resolveQueue.push(successFunc);
          this.rejectQueue.push(errorFunc);
          break;
        case FULFILLED:
          resolveFunc(this.val);
          break;
        case REJECTED:
          rejectFunc(this.val);
          break;
      }
    })
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value))
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }
  static all() { }
  static race() { }
  // catch方法其实就是执行一下then的第二个回调
  catch(rejectFunc) {
    return this.then(undefined, rejectFunc)
  }
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),             // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
      reason => MyPromise.resolve(callback()).then(() => { throw reason })  // reject同理
    )
  }
}