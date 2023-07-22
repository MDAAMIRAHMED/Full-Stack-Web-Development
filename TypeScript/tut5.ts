// explicit types
let name3: string;
let age3: number;
let isLoggedIn: boolean;

// arrays
let strarr: string[] = [];
// let strarr: string[] = [];
// strarr.push('Aamir');

//union types
let mixed2: (number|string|boolean)[] = [];
mixed2.push(10);
mixed2.push('Aamir');
mixed2.push(false);
console.log(mixed2);

let uid: string|number; // round brackets only for arrays
uid = 100;
uid = '123';
//object

let ninja :object;

ninja = {
    "name": 'John',
    "age"  :  45,
}
console.log(ninja);

let ninja2 : {
    name: string,
    age: number,
    weapon: string
};

ninja2 = {
    name: 'Aamir',
    age: 20,
    weapon:'sword'
};

console.log(ninja2);