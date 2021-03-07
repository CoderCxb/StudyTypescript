interface numArr {
	// 限定了对象的属性名或数组的下标只能为数值类型
	// 数字下标返回的类型必须是从字符串下标返回的类型的子类型. 这是因为当使用编制索引时number, JavaScript实际上会在将其编入对象前 转换成string
	[index: number]: Object;
	[propName: string]: Object;
}

let arr = [1, 2, 3, 40, '', {}, null];
console.log(arr[0]);
let obj = {
	0: 0,
	1: 1,
	2: 2,
};
console.log(obj[0]);
export {};
