"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function overload(a) {
    if (typeof a === 'string') {
        return "a is a string";
    }
    else if (typeof a === 'number') {
        return "a is a number";
    }
    else {
        return "a 啥也不是";
    }
}
console.log(overload('a'));
