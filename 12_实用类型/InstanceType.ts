// InstanceType<Type> 获取实例类型
// 接收一个可以new的类型 并返回

class Person {}

type PersonType = typeof Person; // Person
type PersonInstanceType = InstanceType<PersonType>; // Person

export {};
