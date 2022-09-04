/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let len = nums.length;
  let swap = function (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  // 将每一个值找到对应桶的位置
  for (let i = 0; i < len;) {
    let val = nums[i];
    if (val > 0 && val <= len && val != i + 1 && nums[val - 1] != val) {
      swap(nums, i, val - 1);
    } else {
      i++;
    }
  }

  // 找每一个桶是否位置对应
  for (let i = 0; i < len; i++) {
    if (nums[i] != i + 1) return i + 1;
  }
  return len + 1;
};