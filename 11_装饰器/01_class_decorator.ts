// 类装饰器不是new的时候触发的 而是默认写了就会执行并且只执行一次

// 装饰器是一个函数并且必定返回的是一个函数/undefined
// 使用装饰器会调用这两个函数
// 1.如果return function(不是返回参数时) 那么传入的value就是调用装饰器时传入的参数
function class_decorator1(value: any) {
	// 装饰器的参数
	console.log(value);
	// 此处的constructor也就是构造函数/类
	return function (constructor: Function) {
		console.log('调用返回的函数');
	};
}

@class_decorator1('装饰器1的参数')
class MyClass1 {
	static staticAttr: string = 'MyClass1的静态属性';
	constructor() {
		console.log('MyClass1的构造函数');
	}
}
let mc1 = new MyClass1();
// 构造函数其实完全等于类 可以看编译后的代码 其实类就是一个立刻执行的匿名函数返回一个函数 即构造函数
console.log(
	'构造函数是否和类是否完全相等:',
	Object.is(MyClass1.prototype.constructor, MyClass1)
);
// 可以通过构造函数获取到静态属性
console.log((MyClass1.prototype.constructor as any).staticAttr);

// 2.如果return class或者undefined 则传入的参数为构造函数
// 也就是说  重构构造函数就是返回一个新的类继承了原来的类,不确定是否可以完全覆盖原来的构造函数，但就现在这样写，无法覆盖 就连参数个数都没有改变
function class_decorator2(target: any) {
	Object.seal(target);
	Object.seal(target.prototype);
	console.log(target);
	// return undefined;
}

@class_decorator2
class MyClass2 {
	constructor() {
		console.log('MyClass2的构造函数');
	}
}

let mc2 = new MyClass2();
Reflect.defineProperty(MyClass2, 'name', {});

export {};
