// 设置单一属性
function $setKeyResponse(obj, key, area) {
  let renderArea = document.querySelector(area)
  Object.defineProperty(obj, key, {
    get() {
      return this.value;
    },
    set(val) {
      // 视图层更新
      renderArea.innerText = val;

      // 数据层更新
      this.value = val;
    }
  })
}

// 设置所有属性
function $setFullResponse(obj) {
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
      get() {
        return this.value
      },
      set(value) {
        // 根据 key 进行视图更新
        // .......
        // 数据层面更新
        this.value = value;
      }
    })
  })
}

// （1）只能对对象属性进行劫持，不能对整个对象进行劫持
// （2）不能监听到对象属性的增加和删除
// （3）数组的 push、pop、shift、unshift、splice、sort，reverse是无法触发 set 方法