type Params<T> = T extends string ? string : number;

// T是string的子类型  则T为string,否则number
let params: Params<string> = 'str';
