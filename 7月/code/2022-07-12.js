// 数组去重

let arr = [undefined, 2, null, 3, 4, undefined, null, 2, 7, 1, 2, 4, 5]

// 方法一
let a = []
arr.forEach(item => {
  if (!a.includes(item)) a.push(item)
})
console.log("方法一：", a)

// 方法二
let b = Array.from(new Set(arr))
console.log("方法二：", b)
