// 直接插入排序
let instertSort = arr => {
  let temp = 0;
  for (let i = 1; i < arr.length; i++) {
      temp = arr[i];

      for (let j = i - 1; j >= 0; j--) {
          if (temp < arr[j]) {
              arr[j + 1] = arr[j];
              arr[j] = temp;
          } else {
              break
          }
      }
  }
}

let arr = [10, 2, 11, 3, 5, 4, 11, 23, 12, 10]
instertSort(arr);
console.log(arr)

