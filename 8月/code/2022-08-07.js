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

