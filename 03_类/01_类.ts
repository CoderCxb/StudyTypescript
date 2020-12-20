class Person{
    public name:string='张三';
    public age:number=10;
    public run(){
        console.log(`${this.age}岁的${this.name}在跑步`)
    }
}

let person=new Person();
person.run()

export{}