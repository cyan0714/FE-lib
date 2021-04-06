// 1.求1~100的平均值
var sum = 0;
var average = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
average = sum / 100;
console.log("1~100的平均值" + average);

//2.求1~100之间所有偶数和奇数的和
var even = 0,
    odd = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else {
        odd += i;
    }
}
console.log("1~100所有偶数为：" + even);
console.log("1~100所有奇数为：" + odd);

//3.求1~100之间所有能被3整除的数字的和
var third = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        third += i;
    }
}
console.log("1~100之间所有能被3整除的数字的和为：" + third);
//4.求100以内7倍数的总和
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        sum += i;
    }
}
console.log(sum);
