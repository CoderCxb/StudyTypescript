"use strict";
// 总结：通过实现(implements)的方式 只能对类的实例方法、实例对象进行限定
// 要想对一个类的构造方法进行限定 则需要将这个类传入一个专门的函数作为参数  利用参数限定的方式 对类的构造函数进行限定
Object.defineProperty(exports, "__esModule", { value: true });
var TTT = /** @class */ (function () {
    function TTT() {
        this.name = '';
    }
    TTT.age = '';
    return TTT;
}());
function create(T) {
    new T('aaa');
}
