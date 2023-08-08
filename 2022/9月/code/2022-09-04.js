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

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';

  let len1 = num1.length;
  let len2 = num2.length;

  // 结果数组
  let res = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const mul = num1[i] * num2[j];
      // 乘积在结果数组的位置
      const p1 = j + i;
      // 进位位置
      const p2 = i + j + 1;

      const sum = res[p2] + mul;
      res[p1] += Math.floor(sum / 10);
      res[p2] = sum % 10
    }
  }

  if (res[0] == 0) res.shift()
  return res.join("")
};