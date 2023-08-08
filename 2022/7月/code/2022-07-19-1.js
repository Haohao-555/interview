function getParam(search) {
  let fullUrl = location.search;
  if (fullUrl.indexOf("?") == 0 && fullUrl.indexOf("=") > 1) {
      let obj = {};
      let arrsource = unescape(fullUrl).substring(1, fullUrl.length).split("&");
      arrsource.forEach(item => {
          let arr = item.split("=");
          obj[arr[0]] = arr[1];
      });
      return obj[search];
  }
}
console.log(getParam("classId"));
console.log(getParam("id"));
location.href = "http://127.0.0.1:5500/c.html?classId=123&examId=321"