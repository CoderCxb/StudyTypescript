"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 注意：如果是对x 进行直接赋值 x={} 那么 其中的限定属性不能多也不能少
// 但是如果是将一个变量赋值给x  那么属性可以多 不能少 
var x;
var y = {
    name: 'cxb',
    age: 22
};
x = y;
console.log(x);
