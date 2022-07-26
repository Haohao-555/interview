// 简单选择排序
let simpleSelectSort = arr => {
  let len = arr.length;
  for (i = 0; i < len - 1; i++) {
    // 每次已第一个为最小值
    let min = i;

    // 从第 i + 1 开始找最小值
    for (let j = i + 1; j < len; j++) {
       if (arr[j] < arr[min]) min = j;
    }

    // 找到最小值
    if (min != i) {
       let temp = arr[i];
       arr[i] = arr[min];
       arr[min] = temp;
    }
    console.log(`第${i}次排序 ${arr.toString()}`);
  }
}
let arr = [10, 2, 11, 3, 5, 4, 11, 23, 12, 10]
simpleSelectSort(arr);
console.log(arr)
