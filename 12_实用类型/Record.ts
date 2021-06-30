// Record<T,U> 构建一个键类型为T 值类型为U的对象类型

type Record<T extends number | string | symbol, U> = {
	[K in T]: U;
};

type Person = Record<string, string>;

let p: Person = {
	info: 'none',
	age: '19',
};
export {};
