let arr = [1, 5, 3, 7, 6, 8, 12, 0];
function quick(arr) {
  let len = arr.length;

  // 长度为 1
  if (len <= 1) return arr;

  // 取中间值
  let contentValue = arr.splice(Math.floor(len / 2), 1)[0];

  // console.log(contentValue) 6
  // console.log(arr) [1, 5, 3, 7, 8, 12, 0]

  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < len - 1; i++) {
    let item = arr[i];
    item > contentValue ? rightArr.push(item) : leftArr.push(item)
  }

  return quick(leftArr).concat(contentValue, quick(rightArr))
}
console.log(quick(arr))
