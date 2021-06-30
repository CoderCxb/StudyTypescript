// ReturnType<Type> 获取返回值的类型作为类型

// type ReturnType<T extends (...args: any[]) => any> = T extends (
// 	...args: any[]
// ) => infer R
// 	? R
// 	: any;

function fn() {
	return 'str';
}
type f = typeof fn; // ()=>string
type RT = ReturnType<typeof fn>; // string

export {};
