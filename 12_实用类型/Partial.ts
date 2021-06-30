type Person = {
	name: string;
	age: number;
};

type Partial<T> = {
	[K in keyof T]?: T[K]; // 如果出问题可以加undefined,源码有加,目前没加也没问题
};

type OptionalPerson = Partial<Person>;
// Partial<Type> 将type中的属性变成可选属性
let p1: Person = {
	name: 'marco',
	age: 18,
};
let p2: OptionalPerson = {
	name: 'marco',
};
export {};
