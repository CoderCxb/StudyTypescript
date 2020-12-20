"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 取并集  可以拿两个接口进行交叉  而string  number之类进行交叉 会是never
// 而接口交叉出来的会包含他们所有的属性 类似于并集 
var a = {};
a.name = 'cxb';
a.gender = 'man';
