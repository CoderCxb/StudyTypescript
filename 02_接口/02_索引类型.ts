interface numArr{
    // 限定了对象的属性名或数组的下标只能为数值类型
    // [index:number]:any;
    [propName:string]:any;
}

let arr=[1,2,3,40,'',{},null];
console.log(arr[0])
let obj={
    0:0,
    1:1,
    2:2
}
console.log(obj[0])
export{}