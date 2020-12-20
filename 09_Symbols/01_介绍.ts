// 使用const定义Symbol对象
const s1 = Symbol();
const s2 = Symbol('key');
const s3 = Symbol('key');
// symbol是不可改变并且唯一的
// console.log(s2===s3);

let obj={
    [s1]:'sss'
}
console.log(obj[s1])
class SymbolClass{
    [Symbol.hasInstance](foo:any){
        console.log('判断是否是实例')
        return foo instanceof Object;
    }
    [Symbol.toPrimitive](){
        console.log('恢复原来的值');
    }
}
// Symbol.hasInstance  构造器对象用来识别一个对象是否是其实例
console.log({} instanceof <any>(new SymbolClass()))

