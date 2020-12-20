// 布尔类型

const isDone:boolean=false;

// 数值类型
let decLiteral:number=6;        // 十进制表示
let hexLiteral:number=0x00;     // 十六进制
let binaryLiteral:number=0b00;  // 二进制
let octalLiteral:number=0o77;   // 八进制

// 字符串
const str:string='cxb';

// 数组
let list:number[]=[];
list.push(1)

//  元组
let tuple:[string,number];
tuple=['1',1]; 
console.log(str.substr(1))

// 测试：只包含数组和字符串的数组  需要使用到泛型
let arr:Array<string|number>;
arr=[1,'2'];

// 枚举  默认下标从0开始  也可以手动赋值
enum Color {Red=0, Green, Blue}
let c: Color = Color['Green'];
console.log(c)

// any 任意类型  并且可以使用任意方法 都不会报错
let anyType:any;

// void 没有任意类型 一般用于函数的返回值
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let voidType:void;

// null和undefined  用处不太大
// null和undefined是所有类型的子类  所有默认情况下 可以将undefined和null赋给所有类型  将tsconfig.json中的--strictNullChecks标记为true  则null和undefined只能赋值给void和本身
let u:undefined=undefined;
let n:null=null;

// never  报错的函数调用了返回的就是never
let neverType:never=function(){
     throw new Error('error')
}();
// 函数中报错 返回的就是never
function neverTypeFunc():never{
    throw Error('');
}

export{}
