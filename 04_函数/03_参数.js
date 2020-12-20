"use strict";
// 可选参数和默认参数
function fullName(firstName, lastName, type) {
    if (firstName === void 0) { firstName = 'Tom'; }
    if (lastName === void 0) { lastName = 'Kitty'; }
    return firstName + ' ' + lastName;
}
