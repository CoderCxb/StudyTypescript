interface OnlyName {
	name: string;
}

// 通过初始化直接赋值的方式 值必须和接口保持完全一致 即属性不能多也不能少
let marco: OnlyName = {
	name: 'marco',
};

let evan: OnlyName;
// 通过另一个变量进行间接赋值的时候 属性可以多不能少
let info = {
	name: 'evan',
	age: 22,
};
evan = info;

export {};
