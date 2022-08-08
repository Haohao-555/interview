function test(s) {
  let flag = 1;
  let res = 0;
  let i = 0;
  // 过滤空格
  while (s.charAt(i) === '') i++;

  // 判断正负
  if (i < s.length && s.charAt(i) === '+') {
      i++;
  } else if (x < s.length && s.charAt(i) === '-') {
      i++;
      flag = -1;
  }

  while(i < s.length && s.charAt(i) <= '9' && s.charAt(i) >= '0') {
      let tmp = s.charAt(i) - 0;
      res = res * 10 + tmp;

      if (res <= -2147483648) return -2147483648;
      else if (res >= 2147483647) return 2147483647;
  }
  return res;
}

function test(arr) {
  let l = 0;
  let r = arr.length - 1;
  let max = 0;
  while(l < r) {
      let maxArea = (r - l) * Math.min(arr[l], arr[r]);
      if (maxArea > max) max = maxArea;
      arr[l] < arr[r] ? l++ : r--;
  }
  return max;
}