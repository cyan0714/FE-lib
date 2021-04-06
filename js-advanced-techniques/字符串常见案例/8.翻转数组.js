function swap(arr, max, min) {
    let temp = arr[max];
    arr[max] = arr[min];
    arr[min] = temp;
}
function reverseArr(arr) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }
    return arr;
}
let arr = [1, 5, 3, 2, 4];
console.log(reverseArr(arr));
