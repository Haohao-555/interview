function $setKeyResponse(target, key) {
  return new Proxy(target, {
      get(target, prop) {
          return Reflect.get(target, prop)
      },
      set(target, prop, value) {
          // // 单一属性
          // if (Reflect.has(target, key)) {
          //     console.log("更新")
          // }
          Reflect.set(target, prop, value)
      },
      deleteProperty(target, prop) {
          console.log("删除属性", prop)
          Reflect.deleteProperty(target, prop)
          return true
      }
  })
}
let obj = {};
let inp = document.querySelector("input[type='text']")
let a = $setKeyResponse(obj, "message");
inp.oninput = () => (a.message = inp.value);
// （1）Proxy 劫持的是对象，因此可以拦截到对象中所有属性的增加删除
// （2）proxy 可以且不需要对数组的方法进行重载