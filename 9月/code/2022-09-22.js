var wordBreak = function (s, wordDict) {
  const slen = s.length;
  const set = new Set(wordDict);
  let arr = new Array(slen + 1).fill(false);

  arr[0] = true;

  for (let i = 1; i <= slen; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] && set.has(s.substr(j, i - j))) {
        arr[i] = true;
        break;
      }
    }
  }
  return arr[slen];
}
let s = `applepenapple`;
let wordDict = ['apple', 'pen'];
console.log(wordBreak(s, wordDict));

var largestRectangleArea = function (heights) {
  let large = 0;
  let shift = [{ index: -1, height: -1 }];
  for (let i = 0; i < heights.length; i++) {
    // 队列中最后一个元素为非初始化元素
    while (shift[shift.length - 1].height !== -1 && shift[shift.length - 1].height > heights[i]) {
      const pop = shift.pop();
      large = Math.max(large, pop.height * (i - 1 - shift[shift.length - 1].index));
    }
    shift.push({ index: i, height: heights[i] });
  }
  const top = shift[shift.length - 1].index;
  // 
  while (shift[shift.length - 1].height !== -1) {
    const pop = shift.pop();
    large = Math.max(large, pop.height * (top - shift[shift.length - 1].index));
  }
  return large
};