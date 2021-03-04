
'use strict'
let obj={};
Object.seal(obj)
Reflect.set(obj,'title','标题')
console.log(obj.title);