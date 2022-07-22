function quicksort(arr, left, right) {
  let len = arr.length;

  // 起始位
  left = typeof left !== 'number' ? 0 : left;
  // 结束位
  right = typeof right !== 'number' ? len - 1 : right;

  // 两者相遇
  if (left >= right) return

  // 挖出最左边萝卜
  let value = arr[left]

  // 工人 A 所站位置
  let A = left;
  // 工人 B 所站位置
  let B = right;

  // 两人没有相遇
  while (A < B) {
    // 此时 工人 A 位置是一个空坑

    // B从右往左找比 最左边（value）小的萝卜，并且其位置正在工人 A 的右侧
    while (B > A && arr[B] >= value) {
      B--;
    }
    // B 找到啦，把该位置的萝卜挖个 工人 A 进行填坑
    arr[A] = arr[B];
    // 此时 工人 B 位置是一个空坑

    // A从左往右找比 最左边（value）大的萝卜，并且其位置正在工人 B 的左侧
    while (A < B && arr[A] <= value) {
      A++;
    }
    // A 找到啦 该位置的萝卜挖个 工人 B 进行填坑
    arr[B] = arr[A];
    // 此时 工人 A 位置是一个空坑

    // 如果俩工人没有相遇，则再次为对方填坑
  }
  /*
    该次填坑结束，此时 工人A、工人B（A == B）相遇，并且该位置为空，将一开始挖出来的萝卜   （value）放到该位置上
    
    此时形成的结果是：相遇位置的左侧都小于 value,右侧都大于 value
  */
  arr[A] = value;

  // 在相遇位置作为分隔点，将其分割成俩个数组，在进行递归

  // 左侧萝卜
  quicksort(arr, left, A);
  // 右侧萝卜
  quicksort(arr, A + 1, right);
}
let arr1 = [];
let arr2 = [];

for (let i = 0; i < 300000; i++) {
  let num = Math.floor(Math.random() * (10000 - 1) + 1);
  arr1.push(num)
  arr2.push(num)
}
console.time()
quicksort(arr1)
console.timeEnd()
console.log(arr1)

console.log("----------------")

console.time()
arr2.sort((a, b) => a - b)
console.timeEnd()
console.log(arr2)
