/**
 * i 为行 j 为列
 * 从左上角 -> 右下角 由于每次移动只能 向右（j + 1） 或者 向下 (i + 1)
 * 因此到达 dp[i][j] 取决于
 *     （1）从右方向过来的（即从 dp[i][j - 1] 过来） 
 *     （2）从下方向过来的（即从 dp[i - 1][j] 过来） 
 * 故路径总和 dp[i][j] = dp[i][j - 1] + dp[i -1][j];
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
console.log(uniquePaths(3, 7));
/**
 * 道理跟上述一致，只不过需要判断该位置是否有障碍，若有障碍 则 dp[i][j] = 0;
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = Array(m).fill().map(item => Array(n).fill(0))

  //初始化
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      } else {
        dp[i][j] = 0
      }
    }
  }
  return dp[m - 1][n - 1]
};
console.log(uniquePathsWithObstacles([[0], [1]]))
