function BubbleSort (arr) {
  var len = arr.length;
  var temp;
  for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
          if (arr[i] < arr[j]) {
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
}

let arr = [];
for (let i = 0; i < 1000; i++) {
  let num = Math.floor(Math.random()* (1000 - 1)) + 1;
  arr.push(num);
}
console.time()
BubbleSort(arr);
console.timeEnd();
console.log(arr);
