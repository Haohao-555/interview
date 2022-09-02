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

