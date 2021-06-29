// 总结：通过实现(implements)的方式 只能对类的实例方法、实例对象进行限定
// 要想对一个类的构造方法进行限定 则需要将这个类传入一个专门的函数作为参数  利用参数限定的方式 对类的构造函数进行限定

// 限定构造函数
interface constructorInterface {
	new (name: string): void;
}
// 限定属性和方法
// 不能对应私有属性和方法
interface propsInterface {
	name: string;
	age: number;
	run: (name: string) => void;
}
class Person implements propsInterface {
	public name;
	public age;
	run() {}
	constructor(name) {
		this.name = name;
	}
}

function create(constructor: constructorInterface) {
	new constructor('Evan');
}
create(Person);

export {};
