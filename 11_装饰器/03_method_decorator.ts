//修饰静态属性时  第一个参数是构造函数
//修饰实例属性时  第一个参数是原型对象
// 方法的修饰器        (原型对象/构造函数，方法名，方法描述)
function method_decorator(){
    return function(constructor,methodName,config) {
        console.log(constructor[methodName])
        constructor[methodName]=function(){
        console.log("打游戏")
        }
    }
}

class myClass2{
    constructor(){
        console.log('构造函数执行')
    }
    @method_decorator()
    run(){
        console.log('跑步')
    }
}

let mc2=new myClass2()
mc2.run()