// Extract<Type,Union> 获取Type和Union的交集
type T = Extract<'a' | 'b' | 'c', 'b' | 'c' | 'd'> // 'b'|'c'

// 没有交集就是never
type U = Extract<string, number> // nerver


export { }