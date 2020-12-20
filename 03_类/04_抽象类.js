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
Object.defineProperty(exports, "__esModule", { value: true });
// 抽象类就是包含抽象方法的类  可以有静态方法、属性 和实例方法属性
// 一般不会拿去实例化 没意义 一般用来给别的类继承用的
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'Animal';
    }
    Animal.prototype.sing = function () {
        console.log('实例方法唱歌....');
    };
    Animal.swim = function () {
        console.log("静态方法游泳....");
    };
    Animal.age = 66;
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.run = function () { };
    return Cat;
}(Animal));
var cat = new Cat();
console.log(cat['name']);
