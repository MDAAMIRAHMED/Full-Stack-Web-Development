"use strict";
// functions
let greet;
greet = () => {
    console.log("Hello, World!");
};
console.log(greet());
greet = () => {
    console.log("Hello");
};
console.log(greet());
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(10, 20, '100');
add(10, 20);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 20);
// result = "something";
console.log(result);
