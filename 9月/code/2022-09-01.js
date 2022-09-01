/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) return "1";
  // 上一串字符串
  let prevSeq = countAndSay(n - 1);

  // 返回结果
  let res = "";

  // 上一个数字
  let lastNum = prevSeq.charAt(0);
  // 出现的次数
  let numCount = 0;

  for (let i = 0; i < prevSeq.length; i++) {
    if (prevSeq.charAt(i) == lastNum) {
      ++numCount;
    } else {
      res += numCount;
      res += lastNum;

      // 更新上一个数字
      lastNum = prevSeq.charAt(i);
      numCount = 1;
    }

    // 特殊情况
    if (i == prevSeq.length - 1) {
      res += numCount;
      res += lastNum;
    }
  }
  return res;
};