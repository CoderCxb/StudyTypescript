// 1.如果return function 那么传入的value就是普通的参数
let c1;
function class_decorator1(value:any){
    console.log(value)
    // 此处的constructor也就是构造函数/类
    return function(constructor:Function){
        c1=constructor;
        console.log(constructor);
    }
}

@class_decorator1('参数1')
class MyClass1{
    static staticAttr:string='MyClass1的静态属性';
    constructor(){
        console.log('MyClass1的构造函数');
    }
}
let mc1=new MyClass1();
// 构造函数其实完全等于类 可以看编译后的代码 其实类就是一个立刻执行的匿名函数返回一个函数 即构造函数
console.log('构造函数是否和类是否完全相等:',Object.is(MyClass1.prototype.constructor,MyClass1))
// 可以通过构造函数获取到静态属性
console.log((MyClass1.prototype.constructor as any).staticAttr);



// 2.如果return class extends xxx,那么这个xxx就是类本身
// 也就是说  重构构造函数就是返回一个新的类继承了原来的类,不确定是否可以完全覆盖原来的构造函数，但就现在这样写，无法覆盖 就连参数个数都没有改变
function class_decorator2(target:any){
    let newClass=class extends target{

    }
    console.log(newClass);
    return newClass;
}

@class_decorator2
class MyClass2{
    constructor(value?:string){
        console.log('MyClass2的构造函数')
    }
}

let mc=new MyClass2('');



export{};