// Parameters<Type> 获取函数类型中的参数 生成一个和参数列表顺序一致的数组 数组中的元素的类型需要和函数的参数保持一致

type Parameters<T extends (...args: any) => any> = T extends (
	...args: infer P // 使用 infer P 接收args的类型 并且只有满足条件的情况 nerver是走不到的
) => any
	? P
	: never;

type FP1 = Parameters<() => void>; // []

type FP2 = Parameters<(num: number) => void>; // [num: number]

type FP3 = Parameters<(num: number, name: string) => void>; // [num: number, name: string]

let fp: FP3 = [66, 'marco'];

export {};
