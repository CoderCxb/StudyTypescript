//属性装饰器                 (原型对象/构造函数，属性名)
//修饰静态属性时  第一个参数是构造函数
//修饰实例属性时  第一个参数是原型对象
function attribute_decorator(constructor: any,attrName: any) {
    console.log(typeof constructor)
    console.log(attrName)

}


class myClass3{
    @attribute_decorator
    public name:string='xxxx';
    @attribute_decorator
    public static age:number=18;
}


let mc3=new myClass3();
