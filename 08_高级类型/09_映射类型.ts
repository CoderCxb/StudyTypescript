// 映射类型需要使用type  interface好像是不行的
// 原本的Person 
interface Person{
    name:string;
    age:number;
}
// 将属性改为可选属性
type Person2<T>={
    [p in keyof T]?:T[p];
}

// 将属性变为只读属性
type Person3<T>={
   readonly [p in keyof T]:T[p];
}





















export{}