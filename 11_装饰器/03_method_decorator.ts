// 方法的修饰器        (原型对象/构造函数，方法名，方法描述)
// 修饰静态属性时  第一个参数是构造函数
// 修饰实例属性时  第一个参数是原型对象
function method_decorator(){
    return function(constructor:any,methodName:string,config:any) {
        console.log(constructor)
        console.log(methodName);
        console.log(config);
        constructor[methodName]=function(){
            console.log('修改方法');
            
        }
    }
}

class MyClass2{
    constructor(){}
    @method_decorator()
    run(){
        console.log('跑步')
    }
    @method_decorator()
    static sing(){
        console.log('唱歌')
    }
}


let mc=new MyClass2()

mc.run();
MyClass2.sing()