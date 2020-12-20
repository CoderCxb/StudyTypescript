"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 对泛型进行了约束 必须包含一个number类型的length才可以
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// number没有length  所有不行
// let p=new Person<number>();
var p2 = new Person();
