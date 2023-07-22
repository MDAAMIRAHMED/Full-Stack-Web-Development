"use strict";
// let greet: Function  (normal function declaration)
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('Aamir', 'Good Morning');
// example 2
let calc;
calc = (numone, numtwo, str) => {
    if (str === '+') {
        return numone + numtwo;
    }
    else {
        return numone - numtwo;
    }
};
let result = calc(20, 10, '-');
console.log(result);
// example 3 
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
let obj = {
    name: 'aamir',
    age: 20
};
logDetails({ name: 'aamir', age: 19 });
