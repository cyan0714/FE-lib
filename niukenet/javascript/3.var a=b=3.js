var a, b;
(function () {
    console.log(a);// undefined
    console.log(b);// undefined
    var a = (b = 3);// 即 var a = b = 3 , 其中 b 为全局变量
    console.log(a);// 3
    console.log(b);// 3 
})();
console.log(a);// undefined
console.log(b);// 3

console.log('-------------------------');

var c, d;
(function () {
    console.log(c);// undefined
    console.log(d);// undefined
    var c = 4,d = 4;// 即 var c = 4 , var d = 4 , c 和 d 都是局部变量
    console.log(c);// 4
    console.log(d);// 4
})();
console.log(c);// undefined
console.log(d);// undefined
