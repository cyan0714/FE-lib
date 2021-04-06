Function.prototype.a = "a";
Object.prototype.b = "b";
function Person() {
    // var a = 1;
}
let p = new Person();
console.log(p.a); // undefined
console.log(p.b); // b
//1.首先 p 实例先看自己的属性有没有 a , 显然是没有的
//2.再通过 p.__proto__ 看 Person.prototype 里面有没有 a , 显然也没有
//3.再通过 Person.prototype.__proto__ 看看 Object.prototype 里面有没有 a , 显然也没有,但是有 b
//4.所以 p.a 为 undefined , p.b 为 b

console.log(Person.a); // a
console.log(Person.b); // b
//1.首先,先看看 Person 这个构造函数(其实 Person 函数相当于 Function 的一个实例 )里面有没有 a , 显然没有
//2.再通过 Person.__proto__ 看 Function.prototype 里面有没有 a , 因为 Function.prototype.a = "a" , 所以 Person.a 为 a
//3.因为 Function.prototype 里面没有 b , 但是 Function.prototype.__proto__(即 Object.prototype) 里面有 b , 所以 Person.b 为 b
