"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {};
var people = {
    name: 'cxb',
    age: 22,
    sex: 'man',
    // 接口限定了 定义方法的时候就可以不用限定了
    test: function (c, g) {
        console.log('这是一个test函数');
        return 0;
    },
    run: function () {
    }
};
console.log(people.name);
people.test('1', '3');
// 不可变数组
var constArray;
