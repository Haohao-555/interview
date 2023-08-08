var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;

  let startRow = row - 1;
  let startCol = 0;

  while (startRow >= 0 && startCol <= col) {
    if (matrix[startRow][startCol] == target) {
      return true;
    } else if (matrix[startRow][startCol] > target) {
      // 大于目标值 向上移
      startRow--;
    } else {
      // 小于目标值 向右移
      startCol++;
    }
  }

  return false;
}
let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(searchMatrix(matrix, 8));

var sortColors = function (nums) {
  let swap = function (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  let n = nums.length;
  let p0 = 0;
  let p1 = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      swap(nums, i, p1);
      p1++;
    } else if (nums[i] === 0) {
      swap(nums, i, p0);

      if (p0 < p1) swap(nums, i, p1);

      p0++;
      p1++;
    }
  }
  return nums;
}
let nums = [1, 2, 0, 2, 0, 1, 2, 1, 1, 0, 2, 1, 1, 1, 1, 2];
console.log(sortColors(nums));
