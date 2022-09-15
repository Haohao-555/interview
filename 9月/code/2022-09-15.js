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
