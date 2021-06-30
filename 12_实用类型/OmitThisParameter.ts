// OmitThisParameter<Type>  省略函数中名字为this的参数
function fn(this: number) {
	return 888;
}

// 省略函数中的名为this的参数
type OTP = OmitThisParameter<typeof fn>; // ()=>number

let otp: OTP = () => 666;

export {};
