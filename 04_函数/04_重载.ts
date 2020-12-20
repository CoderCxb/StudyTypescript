// 重载的最后一个 尽量写any  可以满足前面的各个情况
function overload (a:number):number;
function overload (a:string):string;
function overload (a:any):any{
    if(typeof a==='string'){
        return `a is a string`;
    }else if(typeof a==='number'){
        return `a is a number`
    }else{
        return "a 啥也不是"
    }
}
console.log(overload('a'));

export{}