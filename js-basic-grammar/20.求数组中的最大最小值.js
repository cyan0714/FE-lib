//1.求数组里的最大值
var arr = [4, 56, 7, 6, 58, 54, 38, -6];
var max = 0;
for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log(max);

//2.求数组里的最小值
var arr1 = [4, 56, 7, 6, 58, 54, 38, 57];
var min = arr1[0];
for (var j = 0; j < arr1.length; j++) {
    if (min > arr1[j]) {
        min = arr1[j];
    }
}
console.log(min);
