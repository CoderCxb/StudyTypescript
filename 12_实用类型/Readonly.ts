type Person = {
	name: string;
	age: number;
};

// type Readonly<T> = {
// 	readonly [K in keyof T]: T[K];
// };

type OptionalPerson = Readonly<Person>;
// Partial<Type> 将type中的属性变成只读属性
let p1: Person = {
	name: 'marco',
	age: 18,
};
p1.name = 'polo';

let p2: OptionalPerson = {
	name: 'marco',
	age: 18,
};

// p2.name = 'polo'// 报错 只读属性 无法修改

// TS提供了很多Readonly的子类型
type RA = ReadonlyArray<string>;
// type RS = ReadonlySet<string>;
// type RM = ReadonlyMap<string, number>;

// 也可以使用const断言
let arr = [1, 2, 3] as const;
export {};
