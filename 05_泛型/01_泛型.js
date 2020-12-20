"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fx(args) {
    console.log(args);
    return args;
}
var Person = /** @class */ (function () {
    function Person(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    return Person;
}());
var person = new Person('cxb', 22, {});
fx('a');
