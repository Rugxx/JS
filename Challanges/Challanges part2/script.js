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

/*
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
*/

//              Challange 4 LOOPS

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    const total = bills[i] + tips[i];
    totals.push(total);
}

console.log(`bills:`, bills);
console.log(`tips:`, tips);
console.log(`totals:`, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));



const kalk = function (numuri) {
    let summa = 0;
    for (let i = 0; i < numuri.length; i++) {
        summa = summa + numuri[i];
    } return summa;
}

const skaitli = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(kalk(skaitli));
console.log(`test123`);