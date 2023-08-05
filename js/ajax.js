
function ajax(method, url, data, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.timeout = options.timeout;
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        for (let key in options.headers) {
            xhr.setRequestHeader(key, options.headers[key]);
        }
        xhr.send(JSON.stringify(data));
    });
}

export default ajax