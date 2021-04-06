function A(x) {
    this.x = x;
}
A.prototype.x = 1;

function B(x) {
    this.x = x;
}
B.prototype = new A(); // 即 B.prototype = { x: undefined }, 因为没传参数所以 x 为 undefined
let a = new A(2),
    b = new B(3);
delete b.x;
console.log(a.x); // 输出: 2
console.log(b.x); // 输出: undefined  因为 b.x 已经被删除,所以只能去 B.prototype 上找 x
