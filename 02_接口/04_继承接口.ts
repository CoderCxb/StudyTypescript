interface Animal{
    name:string;
    age:number;
}

interface Cat extends Animal{
    eat():void;
}

class C implements Cat{
    name:string='';
    age=3;
    eat(){
        
    }
}
export{}