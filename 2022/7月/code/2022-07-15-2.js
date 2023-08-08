let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function http(option) {
    let url = option.url;
    let data = option.url;
    let type = option.type;

    let reqParams = "";
    if (typeof data == "object") {
        for (let key in data) {
            reqParams += `&${key}=${data[key]}`
        }
        reqParams = reqParams.slice(0, str.length - 1);
    }

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let res;
                    let resType = xhr.getResponseHeader("content-Type");
                    if (resType.indexOf("jsonp") >= -1) {
                        res = JSON.parse(xhr.responseText);
                    } else if (resType.indexOf("xml") >= -1) {
                        res = xhr.responseXML;
                    } else {
                        res = xhr.responseText;
                    }
                    resolve(res);
                } else {
                    reject(xhr)
                }
            }
        }

        if (type == "get" || type == "GET") {
            let fullUrl = reqParams.length == 0 ? url : `${url}?${reqParams}`;
            xhr.open(type, fullUrl, true);
            xhr.send(null);
        }

        if (type == "post" || type == "POST") {
            xhr.open(type, url, true);
            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
            xhr.send(reqParams)
        }
    })
}

// get
http({
    url: "http://39.104.61.32/api/atMe/number",
    type: "get"
}).then(res => {
    console.log("api/atMe/number", res)
}).catch(error => {
    console.log(error);
}) 

// post
http({
    url: "http://39.104.61.32/api/blog/create",
    type: "post",
    data: {
        content: "@fwz123123 - fwz123123 123"
    }
}).then(res => {
    console.log("app/user/login", res);
}).catch(error => {
    console.log(error);
})