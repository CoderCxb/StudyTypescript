interface Animal {
	name: string;
	age: string;
}

class Person {
	name: string;
	age: string;
}

let p: Animal = new Person();
console.log(p instanceof Person);

export {};
