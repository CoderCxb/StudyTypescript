// 同名interface会进行合并
// 可以定义相同的属性 但是类型也得一致
interface Person {
  name: string;
  run(who: string): void;
}
interface Person {
  age: number;
}

let p: Person = {
  name: 'marco',
  age: 18,
  run(who: string) {
    console.log(who);
  }
}
p.run('I')