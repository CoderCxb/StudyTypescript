// 使用return this实现连续调用
class MyClass{
    constructor(public num:number) {
        this.num=num;
    }
    addition(n:number){
        this.num+=n;
        return this;
    }
    subtraction(n:number){
        this.num-=n;
        return this;
    }
    multiplication(n:number){
        this.num*=n;
        return this;
    }
    division(n:number){
        this.num/=n;
        return this;
    }
}
let c=new MyClass(1);
c.addition(2).multiplication(10).subtraction(10).division(2);
console.log(c.num)


export{}