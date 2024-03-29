/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  // 对角翻转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // 左右交换
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.ceil(matrix.length / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = temp;
    }
  }
  return matrix;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {

    // acb => abc 把 abc当作map的key值
    let key = strs[i].split('').sort().join('');

    if (!map.has(key)) map.set(key, [])

    map.get(key).push(strs[i]);
  }
  return [...map.values()];
};