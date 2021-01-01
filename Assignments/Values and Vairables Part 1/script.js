//              Assignment101 Values and Variables

/*
let country = "Latvia";
let continent = "Europe";
let population = 1957200;

console.log('', country, '\n', continent, '\n', population);
*/

//              Assignment102 Data types

/*
let country = "Latvia";
let continent = "Europe";
let population = 1957200;

let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
*/

//              let, const and var

/*
const country = "Latvia";
const continent = "Europe";
let population = 1957200;

let isIsland = true;
const language = "latvian"

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

language = 'joke';

*/

//              Basic Operators

/*
const country = "Latvia";
const continent = "Europe";
let population = 1957200;
const language = "latvian"

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(33000000 > population);

let description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' people speak ' +
    language;

console.log(description);
*/

//              Strings and Template literals

/*
const country = "Latvia";
const continent = "Europe";
let population = 1957200;
const language = "latvian"

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(33000000 > population);

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

console.log(description);
*/

//              IF / ELSE STATEMENTS

/*
const country = "Latvia";
const continent = "Europe";
let population = 1.96;
const language = "latvian"

if (population > 22) {
    console.log(`${country}'s population is above avarage.`)
} else {
    console.log(`${country}'s population is ${22 - population} million bellow avarage`);
}
*/

//              TYPE CONVERSION and COERCION

/*
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

//              Equality Operators == vs ===

/*
let numNeighbours = Number(prompt(`How many neighbour coutries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only ${numNeighbours} border!`)
} else if (numNeighbours > 1) {
    console.log(`Greater than 1!`)
} else {
    console.log(`No borders.`);
}
*/

//              Logical operatos

/*
const country = "Latvia";
const continent = "Europe";
let population = 1.96;
const language = "latvian"
const borders = 4;

if (language == 'english' && population < 50 && borders >= 1) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/

//              SWITCH STATEMENT

/*
const language = `arabic`

switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great langauage too <3`);
}
*/

//              CONDITIONAL (TERNARY) OPERATOR (CAN EXPRESS)

const country = "Latvia";
const continent = "Europe";
let population = 1.96;
const language = "latvian"

console.log(`${country}'s population is ${population < 33 ? `below` : `above`} average`);