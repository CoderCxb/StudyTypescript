// OmitThisParameter<Type>
// 忽略函数的this参数后 返回函数的类型
function fn(this: number) {
  return 110;
}

// 获取this参数的类型
type TP = OmitThisParameter<typeof fn>  // ()=>number

let tp: TP = fn.bind(100)

export { }