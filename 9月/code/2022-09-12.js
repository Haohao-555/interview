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
