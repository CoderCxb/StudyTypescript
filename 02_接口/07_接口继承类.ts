class Control{
    public state:any='私有变量';
}


interface SControl extends Control{
    selete():void;
}


class Button extends Control implements SControl{
    selete(){
        console.log(this['state'])
    }
}
let button=new Button();
button.selete()

export{}