interface Face{
    (name:string,age:number):number
}

let func:Face;
func=function(name,age){
    return 1
}

func('',1)