// 修饰静态方法时  第一个参数是构造函数 (静态方法挂载在构造函数上)
// 修饰实例方法时  第一个参数是原型对象 (实例方法挂载在原型对象上)
function method_decorator() {
	// 方法的修饰器 (原型对象/构造函数，  方法名，             方法描述)
	return function (constructor: any, methodName: string, config: any) {
		console.log(constructor);
		console.log(methodName);
		console.log(config);
		// 修改并没有生效
		constructor[methodName] = function () {
			console.log('修改方法');
		};
	};
}

class MyClass {
	constructor() {}
	@method_decorator()
	run() {
		console.log('跑步');
	}
	@method_decorator()
	static sing() {
		console.log('唱歌');
	}
}

let mc = new MyClass();
mc.run();
MyClass.sing();
