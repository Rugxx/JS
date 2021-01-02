"use strict";

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);
console.log(dolphinsScore, koalasScore);

const checkWinner = function (dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= (koalasAvg * 2)) {
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
    } else if (koalasAvg >= (dolphinsAvg * 2)) {
        console.log(`Koalas win (${koalasAvg} vs ${dolphinsAvg})`);
    } else {
        console.log(`NOONE WINS`);
    }
}

checkWinner(dolphinsScore, koalasScore);
*/

//              CHALLANGE #2

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [
    bills[0] + tips[0],
    bills[1] + calcTip(bills[1]),
    bills[2] + tips[2]];

// const total = bills + tips;
console.log(total);
*/

//              Challange #3

const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return `${this.firstName}'s BMI is: ${this.bmi}`
    }
}

const john = {
    firstName: `John`,
    lastName: `Smith`,
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return `${this.firstName}'s BMI is: ${this.bmi}`
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`);
} else {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`);
}
