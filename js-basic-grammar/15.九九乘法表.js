var str = "";
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str += j + "x" + i + "=" + j * i;
        str += " ";
    }
    str += "\n";
}
console.log(str);
