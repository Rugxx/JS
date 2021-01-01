//          Vaules and Variables 01

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'jm';
let $function = 23;

let Person = "jonas"
let PI = 3.1456;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);
*/

//              Data types 02

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

//              let, const and var

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer'
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);
*/

//              Basic Operators

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x +1 = 101
x--; // x = x - 1 = 100
x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//              Operator Precedence

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avarageAge);
*/

//              Strings and template literals

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

//              IF / ELSE STATEMENTS

/*
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start her driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

//              TYPE CONVERSION 

/*
const inputYear = "1991";

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // Invalid but still a number
console.log(typeof NaN);

console.log(String(23), 23);

//              TYPE COERCION

console.log(`I am ${23} years old`);
console.log("23" - "10" + 3);
console.log(`23 - ${3}`)
console.log("23" + "10" + 3); // - converts to numbers
console.log('23' * 2);
console.log('23' / 2);
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

//              Truthy and Falsy values

// 5 Falsy values: 0, ''(Empty strig), undifiend, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 1;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDIFIEND`);
}
*/

//              EQUALITY OPERATORS == vs ===

/*
const age = '18';

if (Number(age) === 18) console.log(`You just became an adult (strict)`);

if (age == 18) console.log(`You just became an adult (loose)`);

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 7) {
    console.log(`${favourite} is also a cool number!`);
} else if (favourite === 9) {
    console.log(`${favourite} is also a cool number!`);
} else {
    console.log(`Number is not 9, 23 or 7`);
}

if (favourite !== 23) {
    console.log(`Why not the 23?`);
}
*/

//              Boolean logic / Logical operators

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense);

const shouldDrive = (hasDriversLicense && hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive`);
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive`);
}
*/

//              SWITCH STATEMENT

/*
const day = "Saturday";

switch (day) {
    case "Monday": // day == Monday
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case "Tuesday":
        console.log(`Prepare theory videos`);
        break;
    case "Wednesday":
    case "Thursday":
        console.log(`Write code examples`);
        break;
    case "Friday":
        console.log(`Record videos`);
        break;
    case "Saturday":
    case "Sunday":
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day`);
}

if (day === `Monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === `Tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `Wednesday` || day === `Thursday`) {
    console.log(`Write code examples`);
} else if (day === `Friday`) {
    console.log(`Record videos`);
} else if (day === `Saturday` || day === `Sunday`) {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`Not a valid day`);
}
*/

//              Statements and expressions

/*
//Expressions produce a value:
3 + 4
1991
true && false && !false

//Satements do not produce a value, "just declares"

if (23 > 10) {
    const str = `23 is bigger`; //statement ends usually with ;
}

console.log(`I'm ${2037 - 1991} years old.`) // expression
*/

//              CONDITIONAL (TERNARY) OPERATOR (CAN EXPRESS)

const age = 23;
//age >= 18 ? console.log(`I like to drink wine 🍷`) :
//   console.log(`I like to drink water🍼`);

const drink = age >= 18 ? `wine 🍷` : `water🍼`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine 🍷`;
} else {
    drink2 = `water🍼`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water🍼`}`);