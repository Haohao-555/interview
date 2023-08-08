/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let searchIndex = (nums, target, lower) => {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;
    while (left <= right) {
      let mid = parseInt((right - left) / 2 + left);
      if (target == nums[mid]) {
        res = mid;
        if (lower) right = mid - 1; // 开始位置，缩小左区域
        if (!lower) left = mid + 1; // 结束位置，缩小右区域
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1
      }
    }
    return res;
  }
  let start = searchIndex(nums, target, true);
  let end = searchIndex(nums, target, false);
  return [start, end];
}