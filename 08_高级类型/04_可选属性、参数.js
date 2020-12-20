"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  可选参数 即可以传满足条件的值也可以传undefined或者不传值
function f(x, y) {
}
f(1, 1);
f(1, undefined);
var C = /** @class */ (function () {
    function C() {
        this.name = '';
        this.age = undefined;
    }
    return C;
}());
var c = new C();
c.age = 10;
