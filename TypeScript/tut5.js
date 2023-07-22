"use strict";
// explicit types
let name3;
let age3;
let isLoggedIn;
// arrays
let strarr = [];
// let strarr: string[] = [];
// strarr.push('Aamir');
//union types
let mixed2 = [];
mixed2.push(10);
mixed2.push('Aamir');
mixed2.push(false);
console.log(mixed2);
let uid; // round brackets only for arrays
uid = 100;
uid = '123';
//object
let ninja;
ninja = {
    "name": 'John',
    "age": 45,
};
console.log(ninja);
let ninja2;
ninja2 = {
    name: 'Aamir',
    age: 20,
    weapon: 'sword'
};
console.log(ninja2);
