// functions

let greet: Function;

greet = () => {
    console.log("Hello, World!");
};

console.log(greet());

greet = () => {
    console.log("Hello");
};

console.log(greet());

const add = (a: number, b: number, c?: number | string ):void => {
    console.log(a + b);
    console.log(c);
};



add(10, 20, '100');
add(10, 20);

const minus = (a: number, b: number) => {
    return a+b;
};

let result = minus(10, 20);
// result = "something";

console.log(result);
