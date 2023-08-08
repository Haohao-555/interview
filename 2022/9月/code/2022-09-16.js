var combine = function (n, k) {
  let res = [];
  /**
   * 
   * @param {number} cur 起始数值 
   * @param {*} n 结束数值
   * @param {*} k 第几次
   */
  var dfs = function (cur, n, k, temp) {
    // 剪枝
    if (temp.length == k) {
      res.push([...temp]);
      return;
    }
    for (let i = cur; i <= n; i++) {
      temp.push(i);
      dfs(i + 1, n, k, temp);
      temp.pop();
    }
  }
  dfs(1, n, k, []);
  return res;
}
console.log(combine(6, 3));

var subsets = function (nums) {
  // 当前结果集
  let res = [[]];
  for (let num of nums) {
    let tmp = [];
    // 遍历之前存在的结果集
    for (let before of res) {
      tmp.push(before.concat(num))
    }

    res = res.concat(tmp);
    console.log("从集合中取出数值", num, "此时集合为", tmp, "进行合并后", res);
  }
  return res;
}
console.log(subsets([3, 2, 1]));

