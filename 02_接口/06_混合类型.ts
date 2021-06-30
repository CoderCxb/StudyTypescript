// 混合类型,即本身是一个函数,又限定了函数(函数也是对象)上的属性
// 可以用于限定类 因为类定义的时候会定义构造函数和静态方法
interface Counter {
	// 限定函数本身
	(start: number): number;
	// 限定函数上的属性
	num: number;
}

// 初始赋值的时候不能一次性完成 需要分两步
let counter = (start) => 1;
(counter as Counter).num = 18;

function test(func: Counter) {
	return func;
}

console.log(test(<Counter>counter)); //[Function: counter] { num: 18 } 一个包含函数的属性
export {};
