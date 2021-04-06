//1.parseInt可以把字符型的转换为数字型 得到的是整数
console.log(parseInt("3.14")); //3
console.log(parseInt("3.94")); //3
console.log(parseInt("140px")); //140
console.log(parseInt("rem140px")); //NaN
console.log(parseInt("1r140px")); //1

//2.parseFloat可以把字符型的转换为数字型 得到的是小数
console.log(parseFloat("3.14")); //3.14
console.log(parseFloat("140px")); //140
console.log(parseFloat("rem140px")); //NaN
console.log(parseFloat("1r140px")); //1
