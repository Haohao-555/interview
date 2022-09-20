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
