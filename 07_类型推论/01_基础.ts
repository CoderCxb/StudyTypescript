// 在没有明确指出类型的情况下 系统会自动进行推论
let str = 'abc';
// str=1;  报错 因为str已经被系统推论成string类型了

// 有可能是被推论成object了
class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}
class Person {}
let arr = [new Cat()];
arr.push(new Person());
console.log(arr);

// 基本等同于 new Array<number,string,null>()
let arr2 = [1, '2', null];

export {};
