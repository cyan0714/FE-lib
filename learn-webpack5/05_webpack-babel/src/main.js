import { sum } from "./js/math";

import './js/element'

const { priceFormat } = require('./js/format')

console.log(sum(20, 30));
console.log(priceFormat());

// 注意：
// 1. 在终端直接输入 webpack 永远都是执行全局的 webpack 版本，想执行局部的 webpack 则可以使用 npx webpack。
// 2. 在终端输入 webpack 或者 npm run build 时会先在当前文件夹下的 src 下找 index.js 文件，找不到就会报错。

const heros = ['yasuo', 'leesin', 'wukong']
heros.forEach(item => item + 'player')
