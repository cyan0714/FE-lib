let str = "aabbbbbaaaacc";
let i = 0,
    j = 0;
let max = 1;
for (; i < str.length; i++) {
    if (str[i] !== str[j]) {
        if (i - j > max) {
            max = i - j;
        }
        j = i;
    }
}
console.log(max);
