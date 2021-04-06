let test = new Boolean(); //没有内容就相当于 undefined , 即 test 为 false
console.log(test); //输出: [Boolean: false]
console.log(test.toString()); // 即  document.write(test); 输出: false

let test0 = new Boolean(undefined);
console.log(test0); //输出: [Boolean: false]
console.log(test0.toString()); // 即  document.write(test); 输出: false

let test1 = new Boolean(0);
console.log(test1); //输出: [Boolean: false]
console.log(test1.toString()); // 即  document.write(test); 输出: false

let test2 = new Boolean(-0);
console.log(test2); //输出: [Boolean: false]
console.log(test2.toString()); // 即  document.write(test); 输出: false

let test3 = new Boolean(NaN);
console.log(test3); //输出: [Boolean: false]
console.log(test3.toString()); // 即  document.write(test); 输出: false

let test4 = new Boolean("");
console.log(test4); //输出: [Boolean: false]
console.log(test4.toString()); // 即  document.write(test); 输出: false

let test5 = new Boolean(null);
console.log(test5); //输出: [Boolean: false]
console.log(test5.toString()); // 即  document.write(test); 输出: false

let test6 = new Boolean(+{}); // {} 前面有 + 号 , 则把整体看成 0
console.log(test6); //输出: [Boolean: false]
console.log(test6.toString()); // 即  document.write(test); 输出: false

console.log(typeof +{}); // 输出 number
console.log(typeof {}); // 输出 object
console.log(typeof undefined); //输出 undefined
console.log(typeof null); //输出 object
console.log(typeof NaN); //输出 number
console.log(typeof true); //输出 boolean
console.log(typeof ""); //输出 string
