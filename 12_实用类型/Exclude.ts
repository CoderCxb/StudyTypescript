// Exclude<Type,ExcludeUnion>

// 从Type中去除ExcludeUnion类型
type A = Exclude<'a' | 'b', 'a'>; // 'a'

type T = Exclude<string | number, number>; // string

type F = Exclude<string | number | (() => void), Function>; // string | number Function包含了()=>void

type v = () => void;

// 所以 ()=>void 是 Function的子类型
type result = v extends Function ? 'yes' : 'no'; // yes

export {};
