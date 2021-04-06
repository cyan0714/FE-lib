//选出大于10的数作为新数组
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];
//刚开始newArr.length是0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        //新数组索引号应该从0开始 依次递增
        newArr[newArr.length] = arr[i];
    }
}
console.log(newArr);
