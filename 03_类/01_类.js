"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.name = '张三';
        this.age = 10;
    }
    Person.prototype.run = function () {
        console.log(this.age + "\u5C81\u7684" + this.name + "\u5728\u8DD1\u6B65");
    };
    return Person;
}());
var person = new Person();
person.run();
