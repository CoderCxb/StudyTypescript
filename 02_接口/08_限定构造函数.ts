// 注意：在TS中 函数的参数个数限制在定义时是没有检查的 只有在使用的时候才有检查
// 如果没有定义构造函数 则会使用默认的空参数构造函数 所以也不会报错
interface ClockInterface {
	instanceProperty: string;
}

interface ClockConstructor {
	staticProperty: string;
	// new 限定的是构造函数 返回值限制实例的类型
	new (hour: number, minute: number): ClockInterface;
}

// ClockConstructor限制的是Clock类上的属性 即静态属性/方法(类的静态属性和方法定义在构造函数上)和构造函数
// ClockInterface限制的是Clock实例出来的对象上的属性
const Clock: ClockConstructor = class implements ClockInterface {
	instanceProperty = '实例属性';
	static staticProperty = '静态属性';
	// constructor(hour: number, minute: number) {}
	constructor() {} // 定义不会检查
};

// 使用会检查  new Clock(); 报错
let clock = new Clock(12, 0);
