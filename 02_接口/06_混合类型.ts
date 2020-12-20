interface Counter{
    (start:number):number;
    age:number;
}

// 实现混合类型的接口不能直接 :接口名 
// 1.可以使用断言 
let f4=<Counter>function(start:number){
    return 1;
};

// 2. 作为一个参数的限定传入一个函数
function test(func:Counter){
    // func.age=10;
    return func
}

test(f4)(1)

f4.age=22;
f4(1);
console.log(f4['age'])

export{}