let anytype: any = 35;

console.log(anytype);

anytype = 'Aamir';
console.log(anytype);

anytype = true;

console.log(anytype);

let mixed: any[] = [];

mixed.push(10);
mixed.push(true);
mixed.push("Aamir");

console.log(mixed);

let ninja: { name: any, age: any };

ninja = {
    name: 'Aamir',
    age: '20'
};

console.log(ninja);

ninja = {
    name: 20,
    age: 'Aamir'
};

console.log(ninja);