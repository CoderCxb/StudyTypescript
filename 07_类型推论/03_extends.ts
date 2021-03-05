// extends放在类或者接口上时 是继承
interface Animal {}
interface Person extends Animal {}

// 在以下这种情况的时候是用来判断是否 Person是否是Animal的子类
type Result = Person extends Animal ? Person : Animal;
