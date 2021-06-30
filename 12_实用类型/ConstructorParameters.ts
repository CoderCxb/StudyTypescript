// ConstructorParameters<Type> // 获取构造函数的参数列表的类型 类型是一个数组 数组中值的类型和顺序和参数一致

// 实现方式
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never

// [value?: any]
type CP = ConstructorParameters<ObjectConstructor>;

export {};
