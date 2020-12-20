interface A{
    name:string;
    age:number;
}

interface B{
    name:string;
    age:string;
    gender:string;
}
// 取并集  可以拿两个接口进行交叉  而string  number之类进行交叉 会是never
// 而接口交叉出来的会包含他们所有的属性 类似于并集 
let a=<A&B>{};
a.name='cxb';
a.gender='man';

export{}
