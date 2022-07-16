let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function ajax(option) {
    // 请求 url
    let url = option.url;
    // 请求类型
    let type = option.type;
    // 请求参数
    let data = option.data;
    // 是否异步
    let async = option.async === false ? true : option.async;

    // 请求参数处理
    let reqParam = "";
    if (typeof data === "object") {
        for (let key in data) {
            reqParam += `key=${data[key]}&`
        }
        reqParam.slice(0, reqParam.length - 1);
    }

    // 获取 XMLHttpRequest 实例对象
    let xhr = new XMLHttpRequest();

    let flag = false;
    // 监听状态变化
    xhr.onreadystatechange = () => {
        
        // 请求前
        if (xhr.readyState <= 1) {
            
            if (option.beforeSend && !flag) {
                option.beforeSend();
                flag = true;
            }
        }

        // 请求完成
        if (xhr.readyState === 4) {
            let res;
            if (option.complete) option.complete();

            // 响应完成
            if (xhr.status === 200) {

                // 判断响应数据类型
                let resType = xhr.getResponseHeader("content-Type");

                // 响应数据处理
                if (resType.indexOf("json") > -1) {
                    res = JSON.parse(xhr.responseText);
                } else if (resType.indexOf("xml") > -1) {
                    res = xhr.responseXML;
                } else {
                    res = xhr.responseText;
                }

                if (option.success) option.success(res);
            } else {
                if (option.error) option.error(xhr)
            }
        } 
    }

    // get 请求
    if (type === "get" || type === "GET") {
        let fullUrl = reqParam.length == 0 ? url : `${url}?${reqParam}`;
        // 发起请求
        xhr.open(type, fullUrl, async);
        // 发送请求
        xhr.send(null);
    }

    // post 请求
    if (type === "post" || type === "POST") {
        // 发起请求
        xhr.open(type, url, async);
        // 设置请求头
        xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
        // 发送请求
        xhr.send(reqParam);
    }
}

// post
ajax({
    url: "http://39.104.61.32/api/user/register",
    type: "post",
    async: true,
    data: {
        userName: "aaa1231",
        password: "321",
        gender: 2
    },
    beforeSend: function () {
        console.log("api/user/register 请求前");
    },
    success: function (res) {
        console.log("api/user/register 请求成功", res);
    },
    error: function (error) {
        console.log("api/user/register 请求发生错误", error);
    },
    complete: function () {
        console.log("api/user/register 请求完成");
    }
})
// get
ajax({
    url: "http://39.104.61.32/api/atMe/number",
    type: "get",
    async: true,
    beforeSend: function () {
        console.log("api/atMe/number 请求前");
    },
    success: function (res) {
        console.log("api/atMe/number 请求成功", res);
    },
    error: function (error) {
        console.log("api/atMe/number 请求发生错误", error);
    },
    complete: function () {
        console.log("api/atMe/number 请求完成");
    }
})