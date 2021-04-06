let person = (function () {
    // 私有属性
    let _name = "bruce";

    return {
        age: 30,
        // getter
        get name() {
            return _name;
        },
        // setter
        set name(val) {
            _name = val;
        },
        greet: function () {
            console.log(`hi, i'm ${_name} and i'm ${this.age} years old`);
        },
    };
})();
console.log(person.name); // 'bruce'
console.log(person._name); // undefined

person.name = "frank";

console.log(person.name); // 'frank'

console.log(Object.keys(person)); // ['age', 'name', 'greet']

person.greet(); // hi, i'm frank and i'm 30 years old
