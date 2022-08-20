/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
     
  let len = s.length;
  let i = len - 1;
  let num = 0;
  while (i >= 0 && s.charAt(i) == " ") {
      i--;
  }
  while  (i >= 0 && s.charAt(i) != " ") {
     ++num;
     --i;
  }
  return num;
};