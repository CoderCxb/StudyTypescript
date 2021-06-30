// NonNullable<Type> 去除Type中的null和undefined类型

// 实现
// type NonNullable<T> = T extends null | undefined ? never : T;

type N = NonNullable<string | number | null | undefined>;

export {};
