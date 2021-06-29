interface Animal {
	name: string;
	age: string;
}

class Person {
	name: string;
	age: string;
}

// 只要对象的属性和方法能和接口对得上 就不会报错
let p: Animal = new Person();
console.log(p instanceof Person);

export {};
