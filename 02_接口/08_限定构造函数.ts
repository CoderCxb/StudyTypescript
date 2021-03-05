// 注意：类型中的constructor限制会被忽略 即写了也没用 需要写成 new ():instanceType 形式
interface ClockInterface {
	instanceProperty: string;
}

interface ClockConstructor {
	staticProperty: string;
	// new 限定的是构造函数 返回值限制实例的类型
	new (hour: number, minute: number): ClockInterface;
}

// ClockConstructor限制的是Clock类上的属性 即静态属性/方法和构造函数
// ClockInterface限制的是Clock实例出来的对象上的属性
const Clock: ClockConstructor = class Clock implements ClockInterface {
	instanceProperty = '实例属性';
	static staticProperty = '静态属性';
	constructor(hour: number, minute: number) {}
};
