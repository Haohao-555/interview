// Array.prototype._filter = function (callback, thisArg) {
//   if (this == undefined) throw new TypeError('this is null or not undefined');
//   if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function');

//   const filterArr = [];
//   const array = Object(this);
//   // 保证len为正整数
//   const len = array.length >>> 0;

//   for (let i = 0; i < len; i++) {
//     // 检查i是否在 array 的属性（会检查原型链）
//     if (i in array) {
//       // 回调函数调用传参
//       if (callback.call(thisArg, array[i], i, array)) {
//         filterArr.push(array[i]);
//       }
//     }
//   }
//   return filterArr;
// }
// let arr = [1, 4, 4, 5, 2, 6, 10, 5, 6, 4, 6]
// let filterArr = arr._filter((item, i) => item > 4)
// console.log(filterArr)

Array.prototype._map = function(callback, thisArg) {
  if (this == undefined) throw new TypeError('this is null or not defined');
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  
  const res = [];
 
  const array = Object(this);
  // 保证len为正整数
  const len = array.length >>> 0;

  for (let i = 0; i < len; i++) {
    if (i in array) {
      // 调用回调函数并传入新数组
      res[i] = callback.call(thisArg, array[i], i, this);
    }
  }
  return res;
}
let arr = [1, 4, 4, 5, 2, 6, 10, 5, 6, 4, 6]
let mapArr = arr._map((item, i) => item * 2)
console.log(mapArr)