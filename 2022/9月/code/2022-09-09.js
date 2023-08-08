/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  let m = matrix.length;
  let n = matrix[0].length;

  // 上边界
  let up = 0;
  // 下边界
  let down = m - 1;
  // 左边界
  let left = 0;
  // 右边界
  let right = n - 1;

  // 遍历
  while (true) {
    // 从左到右
    for (let i = left; i <= right; i++) res.push(matrix[up][i]);
    // 上边界下移
    if (++up > down) break;

    // 从上到下
    for (let i = up; i <= down; i++) res.push(matrix[i][right]);
    // 右边界左移
    if (--right < left) break;

    // 从右到左
    for (let i = right; i >= left; i--) res.push(matrix[down][i]);
    // 下边界上移
    if (--down < up) break;

    // 从下到上
    for (let i = down; i >= up; i--) res.push(matrix[i][left]);
    // 左指针右移
    if (++left > right) break;
  }
  return res;
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = Array(n).fill().map(() => Array(n));

  // 上边界
  let up = 0;
  // 下边界
  let down = n - 1;
  // 左边界
  let left = 0;
  // 右边界
  let right = n - 1;

  let cur = 1;
  // 遍历
  while (true) {
    // 从左到右
    for (let i = left; i <= right; i++) res[up][i] = cur++;
    // 上边界下移
    if (++up > down) break;

    // 从上到下
    for (let i = up; i <= down; i++) res[i][right] = cur++;
    // 右边界左移
    if (--right < left) break;

    // 从右到左
    for (let i = right; i >= left; i--) res[down][i] = cur++;
    // 下边界上移
    if (--down < up) break;

    // 从下到上
    for (let i = down; i >= up; i--) res[i][left] = cur++;
    // 左指针右移
    if (++left > right) break;
  }
  return res;
};