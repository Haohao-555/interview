let removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let len = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[len - 2]) {
      nums[len] = nums[i];
      len++;
    }
  }
  return len;
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => {
    return a - b;
  });

  let backtrack = (start, curr) => {
    result.push([...curr]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }

      curr.push(nums[i]);
      backtrack(i + 1, curr);
      curr.pop();
    }
  }
  backtrack(0, []);
  return result;
};