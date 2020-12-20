"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// 1.如果return function 那么传入的value就是普通的参数
var c1;
function class_decorator1(value) {
    console.log(value);
    // 此处的constructor也就是构造函数/类
    return function (constructor) {
        c1 = constructor;
        console.log(constructor);
    };
}
var MyClass1 = /** @class */ (function () {
    function MyClass1() {
        console.log('MyClass1的构造函数');
    }
    MyClass1.staticAttr = '静态属性';
    MyClass1 = __decorate([
        class_decorator1('参数1')
    ], MyClass1);
    return MyClass1;
}());
var mc1 = new MyClass1();
// console.log('构造函数是否和原本的类(构造函数)相等:',Object.is(MyClass1.prototype.constructor,MyClass1))
console.log(MyClass1.prototype.constructor.staticAttr);
// 2.如果return class extends xxx,那么这个xxx就是类本身
// 也就是说  重构构造函数就是返回一个新的类继承了原来的类,不确定是否可以完全覆盖原来的构造函数，但就现在这样写，无法覆盖 就连参数个数都没有改变
function class_decorator2(target) {
    var newClass = /** @class */ (function (_super) {
        __extends(newClass, _super);
        function newClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return newClass;
    }(target));
    console.log(newClass);
    return newClass;
}
var MyClass2 = /** @class */ (function () {
    function MyClass2(value) {
        console.log('MyClass2的构造函数');
    }
    MyClass2 = __decorate([
        class_decorator2
    ], MyClass2);
    return MyClass2;
}());
var mc = new MyClass2('');
