// 可以通过type关键字 给某个类型起别名
type Name=string|number;
let str:Name;
str=1;
type options='o1'|'o2'|'o3'
let str2:options;
str2='o1';

// 类似于接口的作用  和接口的本质区别 是不能被extends和implements
type C<T>={value:T}
// 与上面基本等价
interface C2<T>{
    value:T
}
let y:C<string>;
y={
    value:''
}
// 数字字面量类型 
// 只能返回1|2的函数
function numberType():1|2{
    return 1;
}

export{}