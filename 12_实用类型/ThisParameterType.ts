// ThisParameterType<Type>
// 函数接收一个this参数 这个参数是没办法直接传递的 不过可以使用apply等修改this执行进行传入
function fn(this: number) {
	return 666;
}

// 获取this参数的类型
type TP = ThisParameterType<typeof fn>;

console.log(fn.apply(888)); // 666

export {};
