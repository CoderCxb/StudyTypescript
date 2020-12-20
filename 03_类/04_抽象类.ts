// 抽象类就是包含抽象方法的类  可以有静态方法、属性 和实例方法属性
// 一般不会拿去实例化 没意义 一般用来给别的类继承用的
abstract class Animal {
    public name:string='Animal';
    public static age:number=66;
    sing(){
        console.log('实例方法唱歌....')
    }
    static swim(){
        console.log("静态方法游泳....")
    }
    abstract run():void;
}

class Cat extends Animal{
    run(){}
}
let cat=new Cat();
console.log(cat['name'])


export{};