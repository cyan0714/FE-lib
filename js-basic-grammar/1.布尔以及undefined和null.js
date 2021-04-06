var flag = true;
var flag1 = false;
console.log(flag + 1); //输出：2 ; true 做运算时当作 1 来看
console.log(flag1 + 1); //输出：1 ; false 做运算时当作 0 来看

//如果一个变量声明未赋值，就是 undefine 未定义数据类型
var str;
console.log(str); //undefined
console.log(str + 1); //NaN

var variable = undefined;
console.log(variable + "pink"); //undefinedpink
console.log(variable + 1); //输出：NaN ; 当 undefined 和一个数字相加，得的结果不是一个数(not a number)

//null 空值
var space = null;
console.log(space + "pink"); //nullpink
console.log(space + 1); //输出：1 ;  当一个变量给 null 值，里面存的值为空
