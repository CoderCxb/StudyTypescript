"use strict";
// 布尔类型
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = false;
// 数值类型
var decLiteral = 6; // 十进制表示
var hexLiteral = 0x00; // 十六进制
var binaryLiteral = 0; // 二进制
var octalLiteral = 63; // 八进制
// 字符串
var str = 'cxb';
// 数组
var list = [];
list.push(1);
//  元组
var tuple;
tuple = ['1', 1];
console.log(str.substr(1));
// 测试：只包含数组和字符串的数组  需要使用到泛型
var arr;
arr = [1, '2'];
// 枚举  默认下标从0开始  也可以手动赋值
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color['Green'];
console.log(c);
// any 任意类型  并且可以使用任意方法 都不会报错
var anyType;
// void 没有任意类型 一般用于函数的返回值
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var voidType;
// null和undefined  用处不太大
// null和undefined是所有类型的子类  所有默认情况下 可以将undefined和null赋给所有类型  将tsconfig.json中的--strictNullChecks标记为true  则null和undefined只能赋值给void和本身
var u = undefined;
var n = null;
// never  报错的函数调用了返回的就是never
var neverType = function () {
    throw new Error('error');
}();
// 函数中报错 返回的就是never
function neverTypeFunc() {
    throw Error('');
}
