function parameter_decoraotr(value: string){            
    console.log(value) // 传入的参数

//修饰静态属性时  第一个参数是构造函数
//修饰实例属性时  第一个参数是原型对象
//                      (构造函数/原型对象,方法名，参数下标)
    return function name(constructor: any,methodName: any,paramsIndex: any) {
        console.log(typeof constructor)
        console.log(methodName)
        console.log(paramsIndex)
    }
}


class myClass4{
    run(@parameter_decoraotr('传入的参数') value:string,){
        console.log()
    }
}


let mc4=new myClass4();
mc4.run('跑步')

