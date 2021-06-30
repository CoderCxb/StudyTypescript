interface A {
	name: string;
	age: number;
}

interface B {
	name: string;
	gender: string;
}
// 取并集  可以拿两个接口进行交叉  而string  number之类进行交叉 会是never
// 而接口交叉出来的会包含他们所有的属性 类似于并集

type AB = A & B;
let ab: AB = {
	name: 'Marco',
	age: 18,
	gender: 'MAN',
};

export {};
