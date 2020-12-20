"use strict";
// 类型保护 也就是对一个不确定的类型的类型进行判断 并针对不同的情况继续宁不同的操作
// 可以使用如typeof 以及instanceof
// 例一:
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('游泳');
    };
    return Fish;
}());
function ifFish(f) {
    if (f.swim) {
        f.swim();
    }
    else {
        console.log('这不是一只鱼');
    }
}
var f = new Fish();
ifFish(f);
