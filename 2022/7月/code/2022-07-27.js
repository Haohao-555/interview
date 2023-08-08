let mergeSort = arr => {
  let len = arr.length;
  
  if (len < 2) return arr;

  let middle = Math.floor(len / 2);
  
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right))
}

let merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
      if (left[0] <= right [0]) {
          result.push(left.shift())
      } else {
          result.push(right.shift())
      }
  }
  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());

  return result;
}
// 测试
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时');