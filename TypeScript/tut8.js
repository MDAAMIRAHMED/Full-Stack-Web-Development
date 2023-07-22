"use strict";
// type aliases
const logDetails = (uid, item) => {
    console.log(`${item} has a ${uid}`);
};
logDetails('59', 'aamir');
const greet = (user) => {
    console.log(`${user.name}, Hello bro`);
};
greet({ name: 'aamir' });
