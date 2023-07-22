// let greet: Function  (normal function declaration)

// example 1

let greet: (x: string, y: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

greet('Aamir', 'Good Morning');

// example 2

let calc: (x: number, y: number, z: string) => number;

calc = (numone: number, numtwo: number, str: string) =>{
    if(str === '+'){
        return numone + numtwo;
    }
    else{
        return numone - numtwo;
    }
};

let result = calc(20, 10, '-');
console.log(result);


// example 3 

let logDetails: (obj: {name: string, age: number}) => void;
type objWithName = {name: string, age: number};
logDetails = (ninja: objWithName) => {
    console.log(`${ninja.name} is ${ninja.age}`);
}

let obj = {
    name: 'aamir',
    age: 20
};

logDetails({name: 'aamir', age: 19});