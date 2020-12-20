"use strict";
var arr = [1, 3, 4, 5, 6, 2, 525, 225, 55, 513, 14, 51, 15, 61, 16, 166, 611];
var arr2 = arr.filter(function (a) {
    return a % 2 === 0;
});
console.log(arr2);
