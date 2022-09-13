function getMerge(arr) {
  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let len = arr.length;
  let ans = [];

  let start;
  let end;

  for (let i = 0; i < len; i++) {
    let s = arr[i][0];
    let e = arr[i][1];

    if (start == undefined) {
      start = s;
      end = e;
    } else if (s <= end) { // 当前的起始值在区间【start, end】 中
      end = Math.max(e, end);
    } else {
      // 创建新的区间
      let part = [start, end];
      ans.push(part);

      // 更新
      start = s;
      end = e;
    }
  }

  if (start !== undefined) {
    let part = [start, end]
    ans.push(part)
  }
  return ans;
}
let data = [
  [1, 3], [2, 6], [8, 10], [15, 18]
]
console.log(getMerge(data));
