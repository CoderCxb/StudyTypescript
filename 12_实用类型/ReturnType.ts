// ReturnType<Type> 获取返回值的类型作为类型

function fn() {
  return 'str'
}
type f = typeof fn; // ()=>string
type RT = ReturnType<typeof fn>  // string

export { }