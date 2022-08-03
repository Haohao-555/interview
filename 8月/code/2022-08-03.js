// 暂停
const PENDING = 'pending'
// 完成
const FULFILLED = 'fulfilled'
// 拒绝
const REJECTED = 'rejected'
class Mypromise {
  constructor(executor) {
    this.status = PENDING;
    this.preValue = null;
    this.resolveQueue = [];
    this.rejectQueue = [];
    let resolve = (val) => {
      if (this.status !== PENDING) return;
      this.status = FULFILLED;

      this.preValue = val;

      while (this.resolveQueue.length) {
        let callback = this.resolveQueue.shift();
        callback(val);
      }
    }

    let reject = (val) => {
      if (this.status !== PENDING) return;
      this.status = REJECTED;

      this.preValue = val;

      while (this.rejectQueue.length) {
        let callback = this.rejectQueue.shift();
        callback(val);
      }
    }
    executor(resolve, reject);
  }
  then = (resolveFunc, rejectFunc) => {
    return new MyPromise((resolve, reject) => {

      typeof resolveFunc !== 'function' ? resolveFunc = value => value : null;
      typeof rejectFunc !== 'function' ? rejectFunc = reason => {
        throw new Error(reason instanceof Error ? reason.message : reason)
      } : null;

      let successFunc = (val) => {
        try {
          let x = resolveFunc(val);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      }
      let errorFunc = (error) => {
        try {
          let x = rejectFunc(error);
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
          resolveFunc(this.preValue);
          break;
        case REJECTED:
          rejectFunc(this.preValue);
          break;
      }
    })
  }
}