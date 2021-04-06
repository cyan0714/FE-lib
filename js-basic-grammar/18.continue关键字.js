// 1.求1~100之间，除了能被7整除之外的整数和
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        continue;
    } // 遇到continue,退出本次循环，直接跳到i++
    sum += i;
}
console.log(sum);
// 2.求1~100之间，要求跳过所有个位为3的数
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 10 == 3) {
        continue;
    }
    sum += i;
}
console.log(sum);
