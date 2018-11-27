// this is a lighter replacement for `import json` for transcrypt

console.log("load json.js...")

export function loads (url) {
    // https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            // force as json dict object...
          resolve(JSON.parse(xhr.response))
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };

      xhr.send();
    });
  }

export function loads1(path){
    console.log("...running loads...")

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("response text " + this.responseText);
        var data = JSON.parse(this.responseText);
        console.log(data)
        //console.log("Quitting json.js")
        return data;
        }
    };

    xmlhttp.open("GET", path, true);
    xmlhttp.send();
}

export function dumps(path){
    return path;
}
