type Animal = {
	name: string;
	run: Function;
};
// Omit 省略一个类型中的部分属性
// Omit<Type,Keys> 从类型Type中Omit出Keys这些属性作为新的类型
// 省略了name 所以新的类型中就只能有run这个key了

// 实现
type Omit<T, K extends string | number | symbol> = {
	[P in Exclude<keyof T, K>]: T[P];
};

type Person = Omit<Animal, 'name'>;
let p: Person = {
	run() {},
};

export {};
