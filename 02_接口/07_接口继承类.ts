// class Control {
// 	public state: string = '私有变量';
// }

// interface SControl {
// 	delete(): void;
// }

// class Button extends Control {
// 	delete() {
// 		console.log(this['state']);
// 	}
// }
// let button = new Button();
// button.delete();

class IClass {
	name: string = 'Hello World !';
}

// 接口继承类的话 会拿到各个属性的类型并做限定
interface IInterface extends IClass {
	// 相当于 name:string;
	age: number;
}

class Person implements IInterface {
	name = '';
	age = 18;
}

export {};
