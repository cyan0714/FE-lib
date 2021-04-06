//从大到小排列
var arr = [8, 6, 9, 4, 5];
// for (var i = 0; i <= arr.length - 1; i++) { //外层循环管趟数
//     for (var j = 0; j <= arr.length - i - 1; j++) { //里层循环管每一趟的交换次数
//         if (arr[j] < arr[j + 1]) {
//             var temp;
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp;
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
