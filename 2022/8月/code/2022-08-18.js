/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  if (s.length == 0) return 0;

  let res = [-1];
  let max = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
      let temp = s.charAt(i);
      if (temp == "(") {
          res.push(i)
      } else {
          res.pop();

          if (res.length == 0) {
            res.push(i);
          } else {
             max  = Math.max(max, i - res[res.length - 1])
          }
      }
  }
  return max;
};