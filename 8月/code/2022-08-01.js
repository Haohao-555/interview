class MyPromise {
  constructor(executor) {
    // 成功回调队列
    this._resolveQueue = [];
    // 失败回调队列
    this._rejectQueue = [];

    let resolve = (val) => {
      while (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    }

    let reject = (val) => {
      while (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    }

    // 创建实例对象时，立即执行 executor 并传入 resolve 和 reject
    executor(resolve, reject);
  }

  then = (resolveFunc, rejectFunc) => {
    this._resolveQueue.push(resolveFunc);
    this._rejectQueue.push(rejectFunc);
  }
}

// 测试
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('result');
  }, 2000);
});

p.then(res => console.log(res)); // result
