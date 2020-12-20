interface fxInterface<T>{
    run():T;
    name:T;
}

let obj:fxInterface<string>={
    run(){
        return '';
    },
    name:'cxb'
}

export{};