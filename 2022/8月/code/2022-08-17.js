var nextPermutation = function(arr) {
  let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
let reverse = (arr, start) => {
  let left = start;
  let right = arr.length - 1;
  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }
}

let len = arr.length;
let i = len - 2; // 倒数第二个数开始

// 找到 左边值小于右边值
while(i >= 0 && arr[i] >= arr[i+1]) {
  i--;
}
if (i >= 0) { // 找到
  let j = len - 1; // 倒数第一个数开始

  // 再从右到左找比arr[i] 小的数
  while(j >= 0 && arr[i] >= arr[j]) {
    j--;
  }
  // 交换
  swap(arr, i, j);
}
  
// 后面值倒排
reverse(arr, i+1);
return arr;
};