/**
 * i 为行 j 为列
 * 从左上角 -> 右下角 由于每次移动只能 向右（j + 1） 或者 向下 (i + 1)
 * 因此到达 dp[i][j] 取决于
 *     （1）从右方向过来的（即从 dp[i][j - 1] 过来） 
 *     （2）从下方向过来的（即从 dp[i - 1][j] 过来） 
 * 故路径总和 dp[i][j] = dp[i][j - 1] + dp[i -1][j];
 */
 var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(new Array(n).fill(1));
 
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
  }

  return dp[m - 1][n - 1];
}
console.log(uniquePaths(3, 7));
