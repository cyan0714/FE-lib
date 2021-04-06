//将arr数组里的元素反着输出
var arr = ["red", "green", "blue", "pink", "purple"];
var newArr = [];
for (var i = arr.length - 1; i >= 0 /*i < arr.length*/; i--) {
    //不能用 i < arr.length ，因为这样条件总是会成立，浏览器一直处于转圈状态
    newArr[newArr.length] = arr[i];
}
console.log(newArr);
var arr1 = [1, 2, 3, 4, 5];
var newArr1 = [];
for (var i = arr1.length - 1; i >= 0; i--) {
    newArr1[newArr1.length] = arr1[i];
}
console.log(newArr1);
