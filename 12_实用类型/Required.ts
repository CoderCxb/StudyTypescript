type Person = {
  name?: string,
  age?: number
}

type OptionalPerson = Required<Person>
// Required<Type> 将type中的属性变成必选属性
let p1: Person = {}
let p2: OptionalPerson = {
  name: "marco",
  age: 18
}

export { }