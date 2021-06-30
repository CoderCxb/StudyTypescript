function parameter_decoraotr(value: string) {
	console.log(value); // 传递给装饰器的 value

	// 修饰实例方法的参数时  第一个参数是原型对象
	// 修饰静态方法的参数时  第一个参数是构造函数
	//                  (构造函数/原型对象,  方法名,          参数下标)
	return function name(constructor: any, methodName: any, paramsIndex: any) {
		console.log(constructor);
		console.log(methodName);
		console.log(paramsIndex);
	};
}

class MyClass {
	run(@parameter_decoraotr('实例方法参数装饰器') value: string) {}
	static sing(@parameter_decoraotr('静态方法参数装饰器') value: string) {}
}

let mc = new MyClass();
mc.run('跑步');
MyClass.sing('唱歌');

export {};
