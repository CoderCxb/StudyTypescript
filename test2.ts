let promise=new Promise(function(resolve,reject){
    resolve();
});

promise.then((value)=>{
    console.log(x)
}).then((value)=>{
    console.log(y)
}).catch(function(){
    console.log('报错')
})