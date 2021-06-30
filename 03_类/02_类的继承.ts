class Animal {
	public name: string;
	private age: number;
	public readonly secret: string = '这是一个秘密';
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	move() {
		console.log(`${this.age}岁的${this.name}在移动`);
	}
}

// 继承只能继承实例属性和方法 无法继承静态方法 因为静态方法是定义在类(类是构造函数的变形,也是对象)上
// 类的继承本质上还是通过原型链的方式进行继承 所以只会继承原型和其实例的属性和方法

class Cat extends Animal {
	public type: string;
	constructor(name: string, age: number, type: string) {
		super(name, age);
		this.type = type;
	}
	showType() {
		console.log(this.type);
	}
}

let cat = new Cat('Tom', 3, '猫');
cat.move();
cat.showType();

export {};
