interface LengthWise {
	length: number;
}

// 对泛型进行了约束 必须包含一个number类型的length才可以
class Person<T extends LengthWise> {}
// number没有length  所有不行
// let p=new Person<number>();
let p2 = new Person<string>();

export {};
