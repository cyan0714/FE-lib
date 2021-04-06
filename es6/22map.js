let arr = [
    {
        name: "cyan",
        age: 18,
    },
    {
        name: "cxy",
        age: 19,
    },
];
let arr1 = arr.map((item) => item.name);
console.log(arr1);
let arr2 = arr.map((item) => ({
    myName: item.name,
    myAge: item.age,
}));
console.log(arr2);
