

//对象传参 
function ajax(options) {
    var onj = { ...options }
    if (!options.hasOwnProperty("timeout")) {
        onj.timeout = 5000
    } if (!options.hasOwnProperty("method")) {
        onj.method = "GET"
    }
    if (!options.hasOwnProperty("data")) {
        onj.data = {}
    }if(options.hasOwnProperty("headers")){
        onj.headers={ 'Content-Type': 'application/json' }   
    }
    // console.log("onj", onj.timeout, onj.method)
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(onj.method, onj.url, true);
        xhr.timeout = onj.timeout;
        xhr.onload = () =>resolve(JSON.parse(xhr.responseText))
        xhr.onerror = () => reject(xhr.statusText);
        for (let key in options.headers) {
            xhr.setRequestHeader(key, onj.headers[key]);
        }
        xhr.send(JSON.stringify(onj.data));
    });
}

export default ajax