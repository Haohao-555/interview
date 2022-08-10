var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  // 排序（降序）
  strs.sort((a, b) => a.length - b.length);
  // 取标志点
  let ans = strs[0];
  // 遍历数组（从第二个开始）
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // 遍历字符串
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j]) break;
    }
    ans = ans.substr(0, j);
    if (ans === "") return ans;
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  // 升序排
  nums.sort((a, b) => a - b);
  // 假设前三最接近目标值
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i++) { // 遍历数组
      let l = i + 1; // 左指针
      let r = nums.length - 1; // 右指针
      while(l < r) {
          // 计算此轮循环的当前值
          let sum = nums[i] + nums[l] + nums[r];
          // 比较，谁更接近目标值
          if (Math.abs(target - sum) < Math.abs(target - ans)) ans = sum;
          // 比目标值大
          if (sum > target) r--;
          // 比目标值小
          else if (sum < target) l++;
          // 等于目标值，直接返回
          else return ans
      }
  }
  return ans;
};