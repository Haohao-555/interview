/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length;
  // 距离
  let distance = len - 1;
  // 倒数第二个开始
  let last = len - 2;

  for (let i = last; i >= 0; i--) {
    // nums[i] + i 代表当前位置（i）能够到达最远右边的距离
    if (nums[i] + i >= distance) {
      // 进入到这里，说明当前 i 可以到达最右边

      // 接着distance更新为（最左边到达i的距离） 
      distance = i;

      // 判断i之前有哪些点可以到达 i，由此循环
    }
  }
  // 遍历完数组， distance 为 0 说明可以进行跳跃
  return distance === 0;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 最远距离
  let maxPos = 0;
  // 最远点
  let end = 0;
  // 步长
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i);
    if (i == end) { // 到达最远边界
      end = maxPos;
      ans++;
    }
  }
  return ans;
};