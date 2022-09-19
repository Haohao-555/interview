/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let m = 1;
  k = k - 1;
  for (let i = 2; i < n; i++) m *= i;

  let a = [];
  for (let i = 1; i <= n; i++) a.push(i)

  let s = []
  for (let i = 0; i < n; i++) {
    let t = k / m | 0
    s[i] = a[t]
    a.splice(t, 1)
    k %= m
    m /= (n - i - 1)
  }
  return s.join("");
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length;
  let col = board[0].length;

  let dfs = (i, j, len) => {
    if (len == word.length) return true;
    // 越界
    if (i >= row || j >= col || j < 0 || i < 0) return false;

    if (board[i][j] !== word.charAt(len)) return false;

    let pre = board[i][j];
    board[i][j] = '.';

    let res = dfs(i + 1, j, len + 1) || dfs(i, j + 1, len + 1) || dfs(i - 1, j, len + 1) || dfs(i, j - 1, len + 1);
    board[i][j] = pre;
    return res;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};