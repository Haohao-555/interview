/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
  const res = [];
  
  /**
   * 
   * @param {Number} l 左括号个数 
   * @param {*} r 右括号个数
   * @param {*} str 当前字符串
   * @returns 
   */
  const dfs = (l, r, str) => { 
    // 结束递归
    if (str.length == 2 * n) { 
      res.push(str);           
      return;                  
    }

    // 左括号还有，继续添加左括号
    if (l > 0) dfs(l - 1, r, str + "(");
    
    // 右括号比左括号剩的多，才能选右括号
    if (l < r) dfs(l, r - 1, str + ")"); 
  };

  dfs(n, n, "");
  return res;
};

// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function(digits) {
//      let list = [];
//      if (digits.length == 0) return "";
//      let obj = {
//          "2": "abc",
//          "3": "def",
//          "4": "ghi",
//          "5": "jkl",
//          "6": "mno",
//          "7": "pqrs",
//          "8": "tuv",
//          "9": "wxyz"
//      }
//      var backtrack = function(str, index) {
//        if (index == digits.length) {
//         list.push(str);
//         return;
//        }
//        let s = obj[digits.charAt(index)];

//        for (let i = 0; i < s.length; i++) {
//         backtrack(str + s.charAt(i), index + 1)
//        }
//      }
//      backtrack('', 0);
//      return list;
// };

console.log(letterCombinations("23"))