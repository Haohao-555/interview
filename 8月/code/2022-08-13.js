/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let len = nums.length;
  if (len == 0) return [];
  
  let fast = 1;
  let slow = 1; // 待替换位置
  while (fast < len) {
      
      if (nums[fast] !== nums[fast - 1]) {
          // 当前 slow 前（包括slow）都不重复
          nums[slow] = nums[fast];
          // 指向下一个待替换位置
          ++slow;
      }
      // 继续前进
      ++fast;
  }
  return slow
};