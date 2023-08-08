/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let len = nums.length;
  if (len == 0) return [];
  
  let fast = 1;
  let slow = 1; // 待替换位置
  while (fast < len) {
      
      if (nums[fast] !== nums[fast - 1]) {
          // 当前 slow 前（包括slow）都不重复
          nums[slow] = nums[fast];
          // 指向下一个待替换位置
          ++slow;
      }
      // 继续前进
      ++fast;
  }
  return slow
};

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    if (words.length == 0) return [];
 
    // 计算单词总长度
    let wordsLen = words.length * words[0].length;
    if (s.length < wordsLen) return  [];
 
    let resArr = [];
    // 每个单词长度
    let childLen = words[0].length;
 
    // 拷贝
    let wordsCopy;
    for (let i = 0; i <= s.length - wordsLen; i++) {
        // 从匹配串截取 单词总长度 的字符串
        let curS = s.slice(i, i+wordsLen);
        console.log("curS字符串为", curS);
 
        let is_Target = true;
        wordsCopy = [...words];
 
        for (let j = 0; j <= wordsLen-childLen; j+= childLen) {
            // 截取第 j 个单词出来
            let curChild = curS.slice(j, j+childLen);
            console.log(`从 curS 截取的第${j + 1}个单词为`, curChild);
 
            // 判断在 wordsCopy 中是否存在
            let index = wordsCopy.indexOf(curChild);
            if (index !== -1) {
                // 存在，移除
                wordsCopy.splice(index, 1);
            } else {
                is_Target = false;
                break;
            }
        }
        console.log("-----------------");
        if (is_Target) resArr.push(i);
    }
    return resArr;
 };