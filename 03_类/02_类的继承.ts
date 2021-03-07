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
