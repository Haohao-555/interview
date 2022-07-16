/**
 * 
 * @param { Function } func 
 * @param { Number } wait 
 * @param {
 *          禁止第一次执行时
 *          leading: false, 
 *          允许最后回调
 *          trailing: true
 *        } options 
 * @returns 
 */
function throttle (func, wait, options) {
  let timeout;
  let context;
  let args;
  // 上一次时间
  let previous = 0;
  if (!options) options = {};
  
  let leading = options.leading;
  let trailing = options.trailing;

  let throttled = function () {

    context = this;
    args = arguments;

    let now = new Date().getTime();
    
    // previous 为 0 （即第一次调用，且 禁止第一次执行时）
    if (!previous && leading === false) previous = now;
    
    // 计算 触发间隔 与 规定间隔时间差值
    let remaining = (wait + previous) - now;

    // 在 previous + wait 这段时间外又再次触发
    if (remaining <= 0) {
      
      // 清除最后回调定时器
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      // 更新本次时间
      previous = now;

      // 调用回调函数
      func.apply(context, args);

      // 垃圾回收
      if (!timeout) context = args = null;
      // 在 wait + previous 时间内触发，设置最后的回调函数
    } else if (!timeout && trailing !== false) {
      
      // 再隔 remain (差值) 设置最后一个定时器
      timeout = setTimeout(later, remaining)

      // 垃圾回收
      if (!timeout) context = arg = null;
    }
  };

  let later = function () {
    previous = leading === false ? 0 : new Date();
    timeout = null;
    func.apply(context, args);
  };
  return throttled;
}