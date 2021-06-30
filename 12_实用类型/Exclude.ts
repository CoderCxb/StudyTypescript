// Exclude<Type,ExcludeUnion> 从 Type 中排除和 ExcludeUnion 交叉的部分

// 实现
// type Exclude<T, U> = T extends U ? never : T;

// 从Type中去除ExcludeUnion类型
type B = Exclude<'a' | 'b', 'a'>; // 'b'

// 对于联合类型(xxx | yyy) TS会进行条件分发
// 等价于
// 'a' extends 'a' ? never : 'a' | 'b' extends 'a' ? never : 'b'
type x = ('a' extends 'a' ? never : 'a') | ('b' extends 'a' ? never : 'b');

type T = Exclude<string | number, number>; // string

type F = Exclude<string | number | (() => void), Function>; // string | number Function包含了()=>void

type v = () => void;

// 所以 ()=>void 是 Function的子类型
type result = v extends Function ? 'yes' : 'no'; // yes

export {};
