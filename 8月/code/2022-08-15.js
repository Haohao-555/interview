var strStr = function(haystack, needle) {
  let hayLen = haystack.length;
  let needlen = needle.length;
  
  if(needlen == 0) return 0;
  let i = 0;
  let j = 0;
  while(i < hayLen && j < needlen) {
      if (haystack.charAt(i) == needle.charAt(j)) {
          i++;
          j++;
      } else {
          // i - j 回退之前前进的距离 j +1 在前进一个位置，变相遍历 haystack
          i = i - j + 1;
          j = 0;
      }
  }
  if (j == needlen) i - j
  
  return  -1;
};
console.log(strStr("Hello", "ll"));