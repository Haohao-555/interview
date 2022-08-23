// 0         | 6        12
// 1       5 | 7     11 13
// 2   4     | 8  10
// 3         | 9

let test = (s, row) => {
  if (row <= 1 || row >= s.length) return s;

  // 周期
  let space = 2 * row - 2;
  let result = "";
  for (let i = 0; i < row; i++) { // 层数循环（纵向）
    for (let j = i; j < s.length; j += space) { // 单层循环 （横向）
      result += s.charAt(j);

      let mod = j % space;
      // 非第一行和最后一行
      if (mod > 0 && i != 0 && i != row - 1) {
        // 在周期范围内，当前位置j 到下一个位置的距离
        // 类似计算 1 =》 5， 7 =》 11 之间的距离
        let index = j + 2 * (row - i - 2);
        result += s.charAt(index);
      }
    }
  }
  return result;
}
let str = 'PAYPALISHIRING';
console.log(test(str, 3)) // PAHN APLSIIG YIR
// P   A   H   N
// A P L S I I G
// Y   I   R
// PAHN APLSIIG YIR

console.log(test(str, 4)) // PIN ALSIG YAHR PI
// P      I       N
// A    L S     I G
// Y  A   H   R
// P      I
// PIN ALSIG YAHR PI

function test(digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10; // 10 % 10 = 0 (1 ~ 9) % 10 = (1 ~ 9)
    // 没有进位，直接返回
    if (digits[i] != 0) return digits;
    // 来到这里：说明前者加了1 导致要进位 故读取下一位进行加一
  }
  // 来到这里：说明 数组中所有值都为 0， 并且还少一位
  digits = [...Array(len + 1)].fill(0);
  // 补齐
  digits[0] = 1;
  return digits;
}
console.log(test([9, 9, 9]))

