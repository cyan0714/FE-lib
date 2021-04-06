// 判断对象 myObj 是否存在
var myObj = {};
console.log(typeof myObj); // object
console.log(typeof myObj == "undefined"); // false , 若 myObj 只声明没赋值则为 true
console.log(myObj === undefined); // false , 若 myObj 只声明没赋值则为 true
console.log(this.hasOwnProperty("myObj")); // false
