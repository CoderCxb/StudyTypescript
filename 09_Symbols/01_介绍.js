"use strict";
var _a;
// 使用const定义Symbol对象
var s1 = Symbol();
var s2 = Symbol('key');
var s3 = Symbol('key');
// symbol是不可改变并且唯一的
// console.log(s2===s3);
var obj = (_a = {},
    _a[s1] = 'sss',
    _a);
console.log(obj[s1]);
var SymbolClass = /** @class */ (function () {
    function SymbolClass() {
    }
    SymbolClass.prototype[Symbol.hasInstance] = function (foo) {
        console.log('判断是否是实例');
        return foo instanceof Object;
    };
    SymbolClass.prototype[Symbol.toPrimitive] = function () {
        console.log('恢复原来的值');
    };
    return SymbolClass;
}());
// Symbol.hasInstance  构造器对象用来识别一个对象是否是其实例
console.log({} instanceof (new SymbolClass()));
