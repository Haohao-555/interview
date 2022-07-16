// 使用 setTimeout 模拟 setInterval
setTimeout (function () {
  eventFunc();
  setTimeout(arguments.callee, 500);
}, 500)

function eventFunc () {
  console.log("每隔0.5秒执行一次");
}