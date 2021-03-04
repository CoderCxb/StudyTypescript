type Person = {
  name: string,
  age: number
}

type OptionalPerson = Partial<Person>
// Partial<Type> 将type中的属性变成可选属性
let p1: Person = {
  name: "marco",
  age: 18
}
let p2: OptionalPerson = {
  name: "marco"
}
export { }