/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  let dfs = function (start, target, combin) {
    // 剪枝
    if (target == 0) res.push([...combin]);

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      // 打头元素不能相同，不然重复
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      combin.push(candidates[i]);
      dfs(i + 1, target - candidates[i], combin);
      combin.pop();
    }

  }
  dfs(0, target, []);
  return res;
};
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let res = [];
  let dfs = function (start, target, combin) {
    if (combin.length == k && target == 0) {
      res.push([...combin]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break;

      if (i > start && candidates[i] == candidates[i - 1]) continue;

      combin.push(candidates[i])
      dfs(i + 1, target - candidates[i], combin);
      combin.pop();
    }

  }
  dfs(0, n, []);
  return res;
};
