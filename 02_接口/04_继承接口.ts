// interface接口通过extends继承type和interface的接口
// interface Animal {
// 	name: string;
// 	age: number;
// }
type Animal = {
	name: string;
	age: number;
};
interface Cat extends Animal {
	eat(): void;
}

// type定义的接口可以使用 & 合并接口
type Dog = {
	run(): void;
} & Animal;

class Tom implements Cat {
	name: string = 'tom';
	age = 3;
	eat() {}
}

class Jim implements Dog {
	name = 'jim';
	age = 18;
	run() {}
}

export {};
