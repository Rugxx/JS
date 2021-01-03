//              Stict mode
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

// const interface = `Audio`;
// const private = 123;
*/

//              FUNCTIONS

/*
function logger() {
    console.log(`My name is Jonas`);
}

// Calling / running/ invoking function (executing)
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(`23`);

*/

//              FUNCTION DECLARATIONS VS EXPRESSIONS

// Declaration can be called before defining 

/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Expression CANT be called before defining maybe better
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//              ARROW FUNCTIONS

/*
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstname} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));
*/

//              FUNCTIONS CALLING OTHER FUNCTIONS

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

//              Reviewing Functions

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstname) {

    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstname} has already retired`)
        return -1;
    }


    // return `${firstname} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Bob`));
*/

//              INTRODUCTIONS TO ARRAYS

/*
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);
// friends = ['bob', 'alice']

const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `teacher`, friends];

console.log(jonas);

// Excercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);
*/

//              BASIC ARRAY METHODS .Push etc

/*
const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`); // last add
console.log(friends);
console.log(newLength);

friends.unshift(`John`); //first add
console.log(friends);

friends.pop(); // remove last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // removes first
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Michael`));
console.log(friends.includes(`23`)); // checks only ===

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven`);
}
*/

//              Introductions to Objects

/*
// const JonasArray = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`]
// ];

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};
console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

// console.log(jonas.`first` + nameKey);

// const interestedIn = prompt(`What do you want to know about Jonas? Choose between first name, last name, age, job and friends`);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(`Wrong request! first name, last name, age, job and friends `);
// }

jonas.location = `Portugal`;
jonas[`twittwer`] = `@JonasSchmedtmann`;
console.log(jonas);

// Challange
// `Jonas has 3 friends and his best friend is called Michael`

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

//              Object Methods

/*
const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} drivers license`
    }
};

// console.log(jonas.calcAge()); // needs to be calculated atleast once

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas[`calcAge`](jonas[`birthYear`]));

// Challange

console.log(jonas.getSummary());
*/

//              LOOP #1

/*
console.log(`lifting weights repetition 1 🍩`);
console.log(`lifting weights repetition 2 🍩`);
console.log(`lifting weights repetition 3 🍩`);
console.log(`lifting weights repetition 4 🍩`);
console.log(`lifting weights repetition 5 🍩`);
console.log(`lifting weights repetition 6 🍩`);
console.log(`lifting weights repetition 7 🍩`);
console.log(`lifting weights repetition 8 🍩`);
console.log(`lifting weights repetition 9 🍩`);
console.log(`lifting weights repetition 10 🍩`);

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep} 🍩`);
}
*/

//              LOOP #2

/*
const JonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];

const types = [];

for (let i = 0; i < JonasArray.length; i++) {
    // Reading array
    console.log(JonasArray[i], typeof JonasArray[i]);

    // Filling types array
    // types[i] = typeof JonasArray[i];
    types.push(typeof JonasArray[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue & break

console.log(`====ONLY STRINGS====`);
for (let i = 0; i < JonasArray.length; i++) {
    if (typeof JonasArray[i] !== `string`) continue;

    console.log(JonasArray[i], typeof JonasArray[i]);
}

// Stop after number

console.log(`====BREAK WITH NUMBER====`);
for (let i = 0; i < JonasArray.length; i++) {
    if (typeof JonasArray[i] === `number`) break;

    console.log(JonasArray[i], typeof JonasArray[i]);
}
*/

//              LOOPS IN LOOPS

/*
const JonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];

for (let i = JonasArray.length - 1; i >= 0; i--) {
    console.log(i, JonasArray[i]);
}

for (let excercise = 1; excercise <= 3; excercise++) {
    console.log(`=====STARTING EXCERCISE ${excercise}=====`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise}: Lifting weights repitition ${rep} 🧨`);
    }
}
*/

//              WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep} 🍩`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`While lifting weights repetition ${rep} 🍩`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a: ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop ended...`);
}