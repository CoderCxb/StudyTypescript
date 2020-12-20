interface Cat{
    type:'Cat';
    name:string;
    age:number;
}


interface Dog{
    type:'Dog';
    name:string;
    age:number;
    gender:string;
}
// 接口中既可以包含string这种类型限定 也可以是"Fish"这样的值限定
interface Fish{
    type:"Fish";
    name:string;
    age:number;
}
// 满足其中一个即可
type Animal=Cat|Dog|Fish;
let a:Animal;
a={
    type:"Cat",
    name:'Tom',
    age:2
}


export{}
