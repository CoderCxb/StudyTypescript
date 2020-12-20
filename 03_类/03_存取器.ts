class Info{
    private _info:object;
    constructor(info:object){
        this._info=info;
    }
    get info():object{
        return this._info;
    }   
    set info(newInfo:object){
        this._info=newInfo;
    }
    static type:string='people';
}

console.log(Info.type)

let info=new Info({
    name:'cxb',
    age:22
});
console.log(info)

info.info={
    name:'cw',
    age:22
}
console.log(info)
