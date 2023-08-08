var simplifyPath = function (path) {
  const arr = path.split('/');
  // 栈
  const stack = [];

  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === "" || arr[i] === ".") {
      // 当前目录
      continue;
    } else if (arr[i] === "..") {
      // 上一层目录
      stack.pop();
    } else {
      // 下一层目录
      stack.push(arr[i]);
    }
  }
  return '/' + stack.join('/');
}

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/a/../../b/../c//.//"));
console.log(simplifyPath("/a//bc/d//././/.."));


var setZeroes = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let rowArr = new Array(row).fill(false);
  let colArr = new Array(col).fill(false);

  // 将 matrix 中存在 0 的位置记录到 行数组（rowArr) 列数组（colArr）
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == 0) {
        rowArr[i] = true;
        colArr[j] = true;
      }
    }
  }

  // 更新
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rowArr[i] || colArr[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}
console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
