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
