/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0 || n == 1) {
    return n == 0 ? 1 : x
  } else if (n < 0) {
    return myPow(1 / x, Math.abs(n))
  } else {
    return n % 2 == 0 ? myPow(x * x, n / 2) : myPow(x * x, Math.floor(n / 2)) * x
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};