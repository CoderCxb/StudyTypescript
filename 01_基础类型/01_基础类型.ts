// 布尔类型

const isDone: boolean = false;

// 数值类型
let decLiteral: number = 6; // 十进制表示
let hexLiteral: number = 0x00; // 十六进制
let binaryLiteral: number = 0b00; // 二进制
let octalLiteral: number = 0o77; // 八进制

// 字符串
const str: string = 'cxb';

// 数组
let list: number[] = [];
list.push(1);

//  元组
let tuple: [string, number];
tuple = ['1', 1];
console.log(str.substr(1));

// 测试：只包含数组和字符串的数组  需要使用到泛型
let arr: Array<string | number>;
arr = [1, '2'];

let index = 0;
// 枚举  默认下标从0开始 依次按照前一个值递增(下标为数字时)  也可以手动赋值 手动赋值时
// 也可以使用变量 不过使用变量的时候 就都得手动赋值了 运行代码前 变量是未知的
enum Color {
	Red = index,
	Green = index + 1,
	Blue = index + 2,
}
// 枚举也可以作为类型使用
let c: Color = Color['Green'];
console.log(c);

// any 任意类型  并且可以使用任意方法 都不会报错
let anyType: any;

// void 没有任意类型 一般用于函数的返回值
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let voidType: void;

// null和undefined  用处不太大
// null和undefined是所有类型的子类  所有默认情况下 可以将undefined和null赋给所有类型  将tsconfig.json中的--strictNullChecks标记为true  则null和undefined只能赋值给void和本身
let u: undefined = undefined;
let n: null = null;

// never  无法正常结束(无限循环或者异常)的函数调用了返回的就是never
// let neverType: never = (function () {
// 	throw new Error('error');
// })();
// 函数中报错 返回的就是never
function neverTypeFunc(): never {
	throw Error('');
}

// unknown表示 不知道类型 因此可以赋任何值 但是 unknown类型只能赋值给自己和any  并且 unknown和any具有吸收性 即 unknown和any如果和其他的类型做联合 则变成unknown ，做交集 则还是其他的类型
let uk: unknown = {};

export {};
