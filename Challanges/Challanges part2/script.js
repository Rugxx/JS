"use strict";

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
