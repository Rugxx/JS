'use strict';

//              Functions

/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const latvia = describeCountry(`Latvia`, 1.96, `Riga`);
const finland = describeCountry(`Finland`, 6, `Helsnki`);
const narnia = describeCountry(`Narnia`, 3, 14, `Asgard`);

console.log(latvia, finland, narnia);
*/

//              Declaration vs Exptression functions

/*
const worldPopulation = 7900;

function percentageOfWorld1(country, population) {
    return `${country} has ${population} million people, so it's about ${population / worldPopulation * 100}% of the world population`;
}

const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population} million people, so it's about ${population / worldPopulation * 100}% of the world population`;
}

console.log(percentageOfWorld1(`China`, 1441));
console.log(percentageOfWorld1(`Latvia`, 1.96));
console.log(percentageOfWorld1(`Finland`, 6));
console.log(percentageOfWorld2(`China`, 1441));
console.log(percentageOfWorld2(`Latvia`, 1.96));
console.log(percentageOfWorld2(`Finland`, 6));
*/

//              ARROW FUNCTIONS

/*
const percentageOfWorld3 = (country, population) => {
    const populationPerc = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${populationPerc}% of the world population.`
}

const china = percentageOfWorld3(`China`, 1441);
const latvia = percentageOfWorld3(`Latvia`, 1.96);
const finland = percentageOfWorld3(`Finland`, 6);

console.log(china, latvia, finland);
*/

//              FUNCTIONS CALLING OTHER FUNCTIONS

/*
function PercentageCalc(countryPeople) {
    return (countryPeople / 7900) * 100;
}

function countryDesc(country, population) {

    const countryPerc = PercentageCalc(population);

    return `${country} has ${population} million people, so it's about ${countryPerc}% of the world population.`
}

const china = countryDesc(`China`, 1441);
const latvia = countryDesc(`Latvia`, 1.96);
const finland = countryDesc(`Finland`, 6);

console.log(china, latvia, finland);
*/

//              INTRODUCTIONS TO ARRAYS

/*
const populations = [1.96, 1441, 6, 69];
console.log(populations.length === 4);

function PercentageCalc(countryPeople) {
    return (countryPeople / 7900) * 100;
}

const populationPerc = [PercentageCalc(populations[0]), PercentageCalc(populations[1]), PercentageCalc(populations[2]), PercentageCalc(populations[3])];

console.log(populationPerc);
*/

//              Basic Array Operations (Methods)

/*
const neighbours = [`Lithuania`, `Estonia`, `Belarus`];
console.log(neighbours);

neighbours.push(`Utopia`);
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
    console.log(`Probably not a central European country`);
}

// console.log(neighbours.indexOf(`Estonia`));
// neighbours[1] = `Republic of Estonia`;
// console.log(neighbours);

neighbours[neighbours.indexOf(`Estonia`)] = `NEW ESTONIA`;
console.log(neighbours);
*/

//              Introductions to Objects

const myCountry = {
    country: `Latvia`,
    capital: `Riga`,
    language: `latvian`,
    population: `1.96`,
    neighbours: [`Estonia`, `Belarus`, `Lithuania`],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    },
    checkIsland: function () {
        if (this.neighbours >= 1) {
            return this.isIsland = true;
        } else {
            return this.isIsland = false;
        }
    }
    // checkIsland: function () {
    //     this.isIsland = this.neighbours.length === 0 ? true : false;
    // }
};

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population = Number(myCountry.population) + 2;
// console.log(myCountry.population);
// myCountry[`population`] = myCountry[`population`] - 2;
// console.log(myCountry[`population`]);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry[`population`] -= 2;
// console.log(myCountry[`population`]);

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

console.log(myCountry.neighbours.length);





