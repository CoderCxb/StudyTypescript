type a = string | number;
type Person = {
	[key in a]: any; // 索引值类型只能是 string | number
};
// keyof 遍历某种类型/对象的属性，并提取其属性的名称
type t1 = keyof {}; // never
type t2 = keyof object; // never
type t3 = keyof any; // string | number | symbol
type t4 = keyof Person; // string | number

export {};
