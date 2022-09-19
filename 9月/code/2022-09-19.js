/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let m = 1;
  k = k - 1;
  for (let i = 2; i < n; i++) m *= i;

  let a = [];
  for (let i = 1; i <= n; i++) a.push(i)

  let s = []
  for (let i = 0; i < n; i++) {
    let t = k / m | 0
    s[i] = a[t]
    a.splice(t, 1)
    k %= m
    m /= (n - i - 1)
  }
  return s.join("");
};