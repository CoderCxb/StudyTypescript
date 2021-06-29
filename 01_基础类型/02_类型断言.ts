// 将一个变量认定为一个类型 即断言
let value: any = 'this is a value';
let strLength: number = (value as string).length;
let strLength2: number = (<string>value).length;
console.log(strLength);

type str_num = string | number;
// str is string 限定返回值为 boolean
function hello(str: str_num): str is string {
	return false;
}
// !用法
// 用在变量前表示取反
// 用在赋值的内容后时，使null和undefined类型可以赋值给其他类型并通过编译  不建议使用后置!

// 默认情况下 undefined和null是可以赋值给任意类型的 但是在tsconfig.json中开启如下选项
// "strictNullChecks": true
// 则undefined和null只能复制给自己和unknown和any

// 当开启以上选项后 想将undefined和null赋值给其他类型 则需要加上后缀!

let obj: void;
obj = null!;

export {};
