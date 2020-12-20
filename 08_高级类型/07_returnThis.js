"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 使用return this实现连续调用
var MyClass = /** @class */ (function () {
    function MyClass(num) {
        this.num = num;
        this.num = num;
    }
    MyClass.prototype.addition = function (n) {
        this.num += n;
        return this;
    };
    MyClass.prototype.subtraction = function (n) {
        this.num -= n;
        return this;
    };
    MyClass.prototype.multiplication = function (n) {
        this.num *= n;
        return this;
    };
    MyClass.prototype.division = function (n) {
        this.num /= n;
        return this;
    };
    return MyClass;
}());
var c = new MyClass(1);
c.addition(2).multiplication(10).subtraction(10).division(2);
console.log(c.num);
