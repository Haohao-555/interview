function findMax(arr) {
  var len = arr.length;
  var max = arr[0]
  for (var i = 0; i < len; i++) {
      if (arr[i] > max) max = arr[i]
  }
  return max;
}

function findMin(arr) {
  var len = arr.length;
  var min = arr[0]
  for (var i = 0; i < len; i++) {
      if (arr[i] < min) min = arr[i]
  }
  return min;
}

var arr = [1, 2, 4, 3, 8, 3, 2, 6, 9]
console.log("max:", findMax(arr))
console.log("min:", findMin(arr))