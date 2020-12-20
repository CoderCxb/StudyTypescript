function fx<T>(args:T):T{
    console.log(args)
    return args;
}

class Person<T,Y,U>{
    public name:T;
    public age:Y;
    public info:U;
    constructor(name:T,age:Y,info:U) {
        this.name=name;
        this.age=age;
        this.info=info;
    }
}
let person=new Person<string,number,object>('cxb',22,{});
fx<string>('a');

export{}