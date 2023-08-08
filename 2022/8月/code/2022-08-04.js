const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.preval = null;
    this.resolveQueue = [];
    this.rejectQueue = [];

    let resolve = (val) => {
      const run = () => {
        if (this.status !== PENDING) return;

        this.status = FULFILLED;
        this.preval = val;

        while (this.resolveQueue.length) {
          let callback = this.resolveQueue.shift();
          callback(val);
        }
      }
      setTimeout(run)
    }
    let reject = (val) => {
      const run = () => {
        if (this.status !== PENDING) return;

        this.status = REJECTED;
        this.preval = val;

        while (this.rejectQueue.length) {
          let callback = this.rejectQueue.shift();
          callback(val);
        }
      }
      setTimeout(run)
    }

    executor(resolve, reject);
  }
  then = (resolveFunc, rejectFunc) => {
    return new MyPromise((resolve, reject) => {

      typeof resolveFunc !== 'function' ? resolveFunc = val => val : null;
      typeof rejectFunc !== 'function' ? rejectFunc = reason => {
        throw new Error(reason instanceof Error ? reason.message : reason)
      } : null;

      let successFunc = (val) => {
        try {
          let x = resolveFunc(val);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error);
        }
      }

      let errorFunc = (val) => {
        try {
          let x = rejectFunc(val);
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x);
        } catch (error) {
          reject(error);
        }
      }

      switch (this.status) {
        case PENDING:
          this.resolveQueue.push(successFunc);
          this.rejectQueue.push(errorFunc);
          break;
        case FULFILLED:
          resolveFunc(this.preval);
          break;
        case REJECTED:
          rejectFunc(this.preval);
          break;
      }
    })
  }
}
