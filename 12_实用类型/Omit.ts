type Animal = {
  name: string,
  run: Function
}
// Omit 省略
// Omit<Type,Keys> 从类型Type中Omit出Keys这些属性作为新的类型
// 省略了name 所以新的类型中就只能有run这个key了
type Person = Omit<Animal, 'name'>
let p: Person = {
  run() { }
}


export { }