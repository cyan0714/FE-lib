"use strict";

// 该文件是执行 npx babel es6Code.js --out-file es5Code.js --presets=@babel/preset-env 命令生成的
var name = 'cyan';
var age = 18;
var superStarsArr = ['Vae', 'jayChou', 'JJ'];
var bestSuperStarsArr = superStarsArr.map(function (item) {
  return item + 'best';
});
