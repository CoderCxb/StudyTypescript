type Person = {
  name: string,
  age: number
}

type OptionalPerson = Readonly<Person>
// Partial<Type> 将type中的属性变成只读属性
let p1: Person = {
  name: "marco",
  age: 18
}
p1.name = 'polo'

let p2: OptionalPerson = {
  name: "marco",
  age: 18
}
// p2.name = 'polo'// 报错 只读属性 无法修改
export { }