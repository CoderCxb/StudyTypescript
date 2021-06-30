//  可选参数 即可以传满足条件的值也可以传undefined或者不传值
function f(x: number, y?: number) {}
f(1, 1);
f(1, undefined);

export {};
