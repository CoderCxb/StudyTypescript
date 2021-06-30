// 映射类型需要使用type  interface好像是不行的
// 原本的Person
interface Person<T> {
	name: string;
	age: number;
}

// TypeFromT 即 TypeFromT的类型就是 T,如果这时传入基本数据类型 就会出问题 因为基本数据类型没有key和value
type TypeFromT<T> = {
	[key in keyof T]: T[key]; // 拿了泛型的key和key对应的类型
};

// 同上 但是多了一个不可修改类型中的属性和方法
type ReadonlyTypeFromT<T> = {
	readonly [key in keyof T]: T[key];
};

let value: TypeFromT<Object> = {};
value.toString = () => 'Hello'; // 如果泛型是基本数据类型的时候 重写方法会报错
let readonlyValue: ReadonlyTypeFromT<Object> = {};
// readonlyValue.toString = () => 'Anything'; // 只读属性 无法修改

export {};
