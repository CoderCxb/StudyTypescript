// 将一个变量认定为一个类型 即断言
let value:any='this is a value';
let strLength:number=(value as string).length;
let strLength2:number=(<string>value).length;
console.log(strLength)

