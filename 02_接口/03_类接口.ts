// 总结：通过实现(implements)的方式 只能对类的实例方法、实例对象进行限定
// 要想对一个类的构造方法进行限定 则需要将这个类传入一个专门的函数作为参数  利用参数限定的方式 对类的构造函数进行限定

interface conInterface{
    new (name:string):void
    age:number;
}
interface slInterface{
    name:string;
}
class TTT implements slInterface{
    name:string='';
    static age:string='';
    constructor(){

    }
}

function create(T:conInterface){
    new T('aaa');
}

export{}