var name1 = "world";
(function () {
    var name1;
    if (typeof name1 === "undefined") {
        name1 = "jack";// 局部的 name,不影响外部的 name
        console.log("Goodbye" + name1);// 输出 "Goodbyejack"
    } else {
        console.log("hello" + name1);
    }
})();
console.log(name1);//输出 world
