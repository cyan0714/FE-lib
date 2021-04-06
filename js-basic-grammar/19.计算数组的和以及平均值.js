var arr = [4, 56, 7, 6, 58, 54, 38, 57];
var sum = 0;
var average = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
average = sum / arr.length;
console.log(sum, average);
