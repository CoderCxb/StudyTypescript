"use strict";
// Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
// Extract<T, U> -- 提取T中可以赋值给U的类型。
// NonNullable<T> -- 从T中剔除null和undefined。
// ReturnType<T> -- 获取函数返回值类型。
// InstanceType<T> -- 获取构造函数类型的实例类型。
Object.defineProperty(exports, "__esModule", { value: true });
// 从all中将和some重合的去除
var a = {};
a = 1;
// 取all和some重合的部分
var b = {};
b = '';
// 去除null和undefined 
var c = {};
c = 2;
// 获取函数返回值类型
// 如果返回值唯一 那么返回的是该值的类型
// 如果返回值不唯一 返回
function f() {
    if (Math.random() > 0.5) {
        return 'string';
    }
    else {
        return 666;
    }
}
f();
console.log(typeof f);
var d;
d = 666;
var C = /** @class */ (function () {
    function C() {
        this.x = '';
    }
    C.prototype.run = function () {
    };
    return C;
}());
// 这个类就相当于接口了  
var e;
e = {
    x: '',
    run: function () { }
};
