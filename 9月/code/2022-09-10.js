var solveNQueens = function (n) {
  // 当前填入的结果
  let tmp = new Array(n).fill(-1);

  // 最终返回的结果 res[i] = j 代表 在第 i 行 第 j 列放入皇后（行与列从0开始计算）
  let res = [];
  // 记录当前哪些位置不能放入皇后
  let cache = [];

  /**
   * 
   * @param {number} index 当前皇后在第几行 
   * @param {*} tmp 当前填入的结果
   * @param {*} cache 
   * @returns 
   */
  let dfs = function (index, tmp, cache) {
    // 最后一个皇后（结束）
    if (index == n) {
      res.push(tmp);
      return;
    }

    for (let i = 0; i < n; i++) {
      //该位置不能放皇后
      if (cache.indexOf(index + "," + i) > -1) continue;

      let arr = [...tmp];
      // 放入皇后（在 第 index 行 第 i 列）
      arr[index] = i;

      // 判断填入的皇后是否符合条件
      let f = 0;
      for (let p = 0; p < n; p++) {
        for (let q = 0; q < n; q++) {

          if (cache.indexOf(p + ',' + q) == -1) {
            // 计算当 在 第 index 行 第 i 列放入皇后后，其他哪些位置不能放入皇后
            if (index == p || i == q || p - index == q - i || p + q == index + i) {
              cache.push(p + ',' + q);
              f++;
            }
          }
        }
      }
      dfs(index + 1, arr, cache);
      while (f--) cache.pop(); // 删除标记
    }
  }
  dfs(0, tmp, cache);
  return res.map(item => {
    let r = []
    item.map(a => {
      let str = ""
      for (let i = 0; i < n; i++)
        if (a === i) str += 'Q'
        else str += "."
      r.push(str)
    })
    return r
  })
}
console.log(solveNQueens(4));

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  // 当前填入的结果
  let tmp = new Array(n).fill(-1);

  let nums = 0;
  // 记录当前哪些位置不能放入皇后
  let cache = [];

  /**
   * 
   * @param {number} index 当前皇后在第几行 
   * @param {*} tmp 当前填入的结果
   * @param {*} cache 
   * @returns 
   */
  let dfs = function (index, tmp, cache) {
    // 最后一个皇后（结束）
    if (index == n) {
      ++nums;
      return;
    }

    for (let i = 0; i < n; i++) {
      //该位置不能放皇后
      if (cache.indexOf(index + "," + i) > -1) continue;

      let arr = [...tmp];
      // 放入皇后（在 第 index 行 第 i 列）
      arr[index] = i;

      // 判断填入的皇后是否符合条件
      let f = 0;
      for (let p = 0; p < n; p++) {
        for (let q = 0; q < n; q++) {

          if (cache.indexOf(p + ',' + q) == -1) {
            // 计算当 在 第 index 行 第 i 列放入皇后后，其他哪些位置不能放入皇后
            if (index == p || i == q || p - index == q - i || p + q == index + i) {
              cache.push(p + ',' + q);
              f++;
            }
          }
        }
      }
      dfs(index + 1, arr, cache);
      while (f--) cache.pop(); // 删除标记
    }
  }
  dfs(0, tmp, cache);
  return nums;
};