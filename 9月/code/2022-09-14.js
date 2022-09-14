/**
 * i 为行 j 为列
 * 从左上角 -> 右下角 由于每次移动只能 向右（j + 1） 或者 向下 (i + 1)
 * 因此到达 dp[i][j] 取决于
 *     （1）从右方向过来的（即从 dp[i][j - 1] 过来） 
 *     （2）从下方向过来的（即从 dp[i - 1][j] 过来） 
 * 故路径总和 dp[i][j] = dp[i][j - 1] + dp[i -1][j];
 * 
 * 而针对此题需要改变的地方在于
 * （1）需要从最右下角 -> 左上角 进行动态规划，由此起始位置为 qp[grid.length - 1][grid[0].length - 1]
 * （2）dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
 * （3）最终返回结果 dp[0][0]
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let dp = new Array(m).fill(new Array(n).fill(1));

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1) {  // 最后一行
        if (j === n - 1) {
          // 到了右下角
          dp[i][j] = grid[i][j];
        } else {
          // 只能向右走 j + 1;
          dp[i][j] = grid[i][j] + dp[i][j + 1];
        }
      } else if (j === n - 1) { // 最后一列
        // 只能向下走
        dp[i][j] = grid[i][j] + dp[i + 1][j];
      } else {
        dp[i][j] = grid[i][j] + Math.min(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  return dp[0][0];
}
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let n = intervals.length;
  let i = 0;
  let ans = [];

  // 将左侧没有包含新区间的加入到结果集中
  while (i < n && intervals[i][1] < newInterval[0]) {
    // 结束位小于新区间的开始位
    ans.push(intervals[i]);
    i++;
  }

  // 将包含区间合并
  if (i < n) {
    // 找到最小起始位
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    while (i < n && intervals[i][0] <= newInterval[1]) {
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
      i++;
    }
  }
  ans.push(newInterval);

  // 将右侧区间填入
  while (i < n) {
    ans.push(intervals[i])
    i++;
  }

  return ans;
};