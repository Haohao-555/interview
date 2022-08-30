/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let b = 1;
  while (x / b >= b) {
    b++;
  }
  return b - 1;
};