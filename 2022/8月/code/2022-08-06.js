// 判断是否为回文子串
function test(str) {
  let len = str.length;
  let l = 0;
  let r = len - 1;
  let flag = true;
  while (l < r && flag) {
    if (str.charAt(l) != str.charAt(r)) flag = false;
    l++;
    r--;
  }
  return flag;
}

// 判断是否为回文数
function test(num) {
  if (num < 0 || num % 10 == 0) return false;
  let temp = num;
  let reverse = 0;
  while (temp != 0) {
    let x = temp % 10;

    temp = Math.floor(temp / 10);
    reverse = reverse * 10 + x;
  }
  return reverse == num;
}
console.log(test(32))

// 最长回文子串
let longestPalindrome = function (s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    // 奇数子串
    helper(i, i);
    // 偶数子串
    helper(i, i + 1);
  }
  function helper(l, r) {
    // 找左右相同字符串
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    // 找到回文子串后，由于 while 再执行了一轮循环，故需要对指针进行回退，即 (l + 1) (r - 1)
    const maxStr = s.slice(l + 1, r + 1 - 1);
    if (maxStr.length > max.length) max = maxStr;
  }
  return max;
}

let s = "abbaabbaaccaabbaab";
console.log(longestPalindrome(s));