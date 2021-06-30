// 转成大写
type u = Uppercase<'a'>; // 'A'

type l = Lowercase<'A'>; // 'a'

type c = Capitalize<'hello'>; // 首字母大写 Hello

type uc = Uncapitalize<'Hello'>; // 去除首字母大写 hello
