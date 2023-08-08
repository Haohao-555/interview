/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function isValid(row, col, val, board) {
    // 行不能重复
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === val) return false

    }
    // 列不能重复
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === val) return false
    }
    let boxRow = Math.floor(row / 3) * 3
    let boxCol = Math.floor(col / 3) * 3

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === val) return false

      }
    }

    return true
  }

  let helper = function () {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== ".") continue;
        for (let val = 1; val <= 9; val++) {
          if (isValid(i, j, `${val}`, board)) {
            board[i][j] = `${val}`
            if (helper()) return true;
            board[i][j] = "."
          }
        }
        return false;
      }
    }
    return true;
  }
  helper();
  return board;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(solveSudoku(board))

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  let l = 0;
  let r = height.length - 1;

  let lmax = 0; // 左边最大值
  let rmax = 0; // 右边最大值

  while (l < r) {
    // 更新最大值
    lmax = Math.max(lmax, height[l]);
    rmax = Math.max(rmax, height[r]);

    if (lmax < rmax) { // 左边短于右边
      res += (lmax - height[l])
      l++;
    } else { // 右边短于左边
      res += (rmax - height[r])
      r--;
    }
  }
  return res;
};