// 属性装饰器 定义即触发 并不是实例化或者调用属性时触发的

//属性装饰器                 (原型对象/构造函数，属性名)
//修饰实例属性时  第一个参数是原型对象
//修饰静态属性时  第一个参数是构造函数
function attribute_decorator(constructor: any,attrName: any) {
    console.log(attrName)
    console.log(typeof constructor)
}


class myClass3{
    @attribute_decorator
    public name:string='xxxx';

    @attribute_decorator
    public static age:number=18;
}

