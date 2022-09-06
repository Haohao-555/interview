/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let dfs = function (nums, tmp, visited) {

    if (tmp.length == nums.length) {
      res.push([...tmp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] == 1) continue;
      visited[i] = 1;

      tmp.push(nums[i]);

      dfs(nums, tmp, visited);

      visited[i] = 0;
      tmp.pop();
    }
  }
  dfs(nums, [], []);
  return res;
};
console.log(permute([1, 2, 3]))

var permuteUnique = function (nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);
  const dfs = (size, tmp) => {
    if (size === nums.length) {
      ans.push([...tmp]);
      return;
    }

    for (let i = 0; i < nums.length; ++i) {
      if (vis[i] || (i > 0 && nums[i] == nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      tmp.push(nums[i]);
      vis[i] = true;
      dfs(size + 1, tmp);
      vis[i] = false;
      tmp.pop();
    }
  }
  nums.sort((a, b) => a - b);
  dfs(0, []);
  return ans;
};