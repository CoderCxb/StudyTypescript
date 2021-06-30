// 属性装饰器 定义即触发 并不是实例化或者调用属性时触发的

//修饰实例属性时  第一个参数是原型对象(实例属性挂载在原型对象上)
//修饰静态属性时  第一个参数是构造函数(静态属性挂载在构造函数上)

//属性装饰器                 (原型对象/构造函数，属性名)
function attribute_decorator(constructor: any, attrName: any) {
	console.log(attrName);
	console.log(constructor);
}

class myClass3 {
	@attribute_decorator
	public name: string = 'marco';

	@attribute_decorator
	public static age: number = 18;
}
