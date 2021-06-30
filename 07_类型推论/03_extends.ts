// extends放在类或者接口上时 是继承
interface Animal {}
interface Person extends Animal {}

// 在以下这种情况的时候是用来判断是否 Person是否是Animal的子类
type Result = Person extends Animal ? Person : Animal;

// 此处是限定T必须是Object的子类(undefined和null不是Object的子类) 虽然undefined可以赋值给任意类型
function test<T extends Object>(): T {
	return {} as T;
}

test<string>();
