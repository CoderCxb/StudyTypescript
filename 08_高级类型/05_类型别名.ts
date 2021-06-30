// 可以通过type关键字 给某个类型起别名
type Name = string | number;
let value: Name;
value = 666;
type options = 'o1' | 'o2' | 'o3';
let option: options;
option = 'o1';

// interface重复定义会进行合并 type不能重复定义
// 类似于接口的作用  和接口的本质区别 是不能extends和implements别的类型 但是可以通过 & 进行合并

// type和interface都可以使用泛型
type C1<T> = { value: T };
interface C2<T> {
	value: T;
}

// 数字字面量类型
// 只能返回1|2的函数
function numberType(): 1 | 2 {
	return 1;
}

export {};
