interface Person{
    name:string;
    age:number;
}
// 接收类型 接口 类, 不接受对象
let key:keyof Person;
key='age';

let obj={
    n:'',
    a:1,
}
class C{
    name:string='';
    age:number=1;
}
class D{
    sex:string='';
}
let key2:keyof (C & D);
key2='sex'
export{}