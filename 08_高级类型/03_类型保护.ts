// 类型保护 也就是对一个不确定的类型的类型进行判断 并针对不同的情况继续宁不同的操作
// 可以使用如typeof 以及instanceof
// 例一:
class Fish{
    swim(){
        console.log('游泳');
    }
}
function ifFish(f:any){
    if(f.swim){
        f.swim();
    }else{
        console.log('这不是一只鱼');
    }
}
let f=new Fish();
ifFish(f);