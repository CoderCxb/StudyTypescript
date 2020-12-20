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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.secret = '这是一个秘密';
        this.name = name;
        this.age = age;
    }
    Animal.prototype.move = function () {
        console.log(this.age + "\u5C81\u7684" + this.name + "\u5728\u79FB\u52A8");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, type) {
        var _this = _super.call(this, name, age) || this;
        _this.type = type;
        return _this;
    }
    Cat.prototype.showType = function () {
        console.log(this.type);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom', 3, '猫');
cat.move();
cat.showType();
