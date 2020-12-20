"use strict";
var promise = new Promise(function (resolve, reject) {
    resolve();
});
promise.then(function (value) {
    console.log(x);
}).then(function (value) {
    console.log(y);
}).catch(function (e) {
    console.log(e);
});
