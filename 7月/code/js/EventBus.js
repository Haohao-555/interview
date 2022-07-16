class EventBus {
  constructor() {
      this.callbackId = 0;
      this.eventObj = {}; // 所有订阅事件
  }
  // 订阅事件
  $on(name, callback) {
      if (!this.eventObj[name]) this.eventObj[name] = []
      const id = this.callbackId++;
      this.eventObj[name][id] = callback;
      return id;
  }
  // 取消订阅事件
  $off(name, id) {
      delete this.eventObj[name][id];
      delete this.eventObj[name];
  }
  // 发布事件
  $emit(name, ...args) {
      const eventList = this.eventObj[name];
      if (!eventList) return -1;
      for (const event of eventList) {
          event && event(...args);
      }
      return 1;
  }
}