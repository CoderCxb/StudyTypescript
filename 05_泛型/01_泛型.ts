// 泛型：可以动态的传入类型

// 例一：函数 接收的参数类型和返回值类型都由T决定 而这个T是函数使用的时候传入的
// 使用的时候代码提示可能不太友好 因为类型没有确定下来
function fx<T>(args: T): T {
	console.log(args);
	return args;
}

// 例二: 类 接收三个泛型 属性的类型是由泛型决定
class Person<T, Y, U> {
	public name: T;
	public age: Y;
	public info: U;
	constructor(name: T, age: Y, info: U) {
		this.name = name;
		this.age = age;
		this.info = info;
	}
}
// 使用的时候附加泛型即可
let person = new Person<string, number, object>('cxb', 22, {});
fx<string>('a');

export {};
