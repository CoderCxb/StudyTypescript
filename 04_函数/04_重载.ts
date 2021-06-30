// 函数重载 对函数进行多次定义 函数体只有一份 需要在函数体中对不同的参数情况进行不同的处理
// 为避免传入的参数不满足情况 可以在最后一个使用any进行接收
function overload(value: number): number;
function overload(value: string): string;
function overload(value: any): any {
	if (typeof value === 'string') {
		// value 在此处是string类型 有string的代码提示
		return `value is value string`;
	} else if (typeof value === 'number') {
		// value 在此处是number类型 有number的代码提示
		return `value is value number`;
	} else {
		// 其他类型 无代码提示
		return 'value 啥也不是';
	}
}
console.log(overload('value'));

export {};
