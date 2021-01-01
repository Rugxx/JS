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