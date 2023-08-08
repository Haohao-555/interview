/**
 * 
 * @param { Array } arr 
 * @param { Number } left // 左数组起始下标 
 * @param { Number } right  // 右数组起始下标
 */
let i = 0;
function quicksort(arr, left, right) {
  let partitonIndex;

  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? arr.length - 1 : right;

  if (left < right) {
    partitonIndex = partition(arr, left, right);
    // 左侧快排
    quicksort(arr, left, partitonIndex - 1);
    // 右侧快排
    quicksort(arr, partitonIndex + 1, right);
  }
  console.log(`第${++i}遍遍历结果为${arr.toString()}`);
  return arr;
}
// 分区
function partition(arr, left, right) {
  // 基准点下标
  let pivot = left;
  // 数组第二位开始比较
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    // 小于基准点值
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}
// 值交换
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
let arr = [1, 2, 66, 44, 33, 3, 22, 13]
quicksort(arr)
console.log(arr)