// type aliases

type StringOrNum = string | number;

type objWithName = {
    name: string,
    uid?: StringOrNum
};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a ${uid}`);
};

logDetails('59', 'aamir');

const greet = (user: objWithName) => {
    console.log(`${user.name}, Hello bro`);
};

greet({name: 'aamir'});