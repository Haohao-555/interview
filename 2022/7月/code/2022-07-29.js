/* Array.prototype._forEach = function(callback, thisArg) {
  if (this == null) throw new TypeError('this is null or not defined');
  if (typeof callback !== "function")  throw new TypeError(callback + ' is not a function');
  
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    callback.call(thisArg, arr[i], i, arr);
  }  
}

let arr = [
  {
    name: "小明",
    age: 12
  },
  {
    name: "小红",
    age: 12
  }
]
arr._forEach(item => {
  console.log(`${item.name} - ${item.age}`)
}) */