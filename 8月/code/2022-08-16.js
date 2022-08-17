var divide = function(dividend, divisor) {
  if (divisor === 0) return Infinity;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  let res = 0;
  let flag = '';
  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
      flag = '-';
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  
  while (dividend >= divisor) {
      let temp = divisor, m = 1;

      // 计算出最大值
      while (temp <= (dividend >> 1)) { 
          temp <<= 1; // temp = temp * 2;
          m <<= 1; // m = m * 2;
      }

      dividend -= temp;
      res += m;

      // dividend 可能还可以再减去多个 divisor，故再次执行一次 while
  }

  return parseInt(flag + res);
};
console.log(divide(1, 1))
