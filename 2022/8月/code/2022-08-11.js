function test(nums, target) {
  let res = [];

  // 特殊情况判断
  if (nums == null || nums.lengths < 4) return res;

  // 升序
  nums.sort((a, b) => a - b);

  let len = nums.length;
  for (let a = 0; a < len - 3; a++) {

    // 确保第一个元素变了，并固定其值
    if (a > 0 && nums[a] == nums[a - 1]) continue;

    // 固定第二值
    for (let b = a + 1; b < len - 2; b++) {
      // 确保第二个元素变了，并固定其值
      if (b > a + 1 && nums[b] == nums[b - 1]) continue;

      // 确认双指针
      c = b + 1;
      d = len - 1;

      while (c < d) {
        // 计算此时四个值
        let sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum < target) {
          c++;
        } else if (sum > target) {
          d--;
        } else {
          res.push([nums[a], nums[b], nums[c], nums[d]]);

          // 对左右指针进行移动
          while (c < d && nums[c] == nums[c + 1]) {
            c++;
          }
          while (c < d && nums[d] == nums[d - 1]) {
            d--
          }
          c += 1;
          d -= 1;
        }
      }
    }
  }
  return res;
}

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let tmp = str.charAt(i);
    // 入栈
    if (tmp == '(' || tmp == '{' || tmp == '[') {
      stack.push(tmp);
    } else {
      let top = stack[stack.length == 0 ? 0 : stack.length - 1]
      if (tmp == ')' && stack.length != 0 && top == '(') {
        stack.pop();
      } else if (tmp == '}' && stack.length != 0 && top == '{') { 
        stack.pop();
      } else if (tmp == ']' && stack.length != 0 && top == '[') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length == 0;
};
