/*
const markWeight = 78;
const markHeight = 1.69;
const markBMI = (markWeight / markHeight ** 2);

const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = (johnWeight / johnHeight ** 2);

console.log(markWeight, markHeight, markBMI);
console.log(johnWeight, johnHeight, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
*/

/*
const markWeight = 95;
const markHeight = 1.88;
const markBMI = (markWeight / markHeight ** 2);

const johnWeight = 85;
const johnHeight = 1.76;
const johnBMI = (johnWeight / johnHeight ** 2);

console.log(markWeight, markHeight, markBMI);
console.log(johnWeight, johnHeight, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

//               CHALLANGE 2

if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Marks ${markBMI}!`);
}
*/

//              Challange 3

/*
const dolphinOne = 97;
const dolphinTwo = 112;
const dolphinThree = 101;

const koalaOne = 109;
const koalaTwo = 95;
const koalaThree = 106;

const dolphinsAvarage = (dolphinOne + dolphinTwo + dolphinThree) / 3;
const koalaAvarage = (koalaOne + koalaTwo + koalaThree) / 3;

console.log(`Dolphins scored:
${dolphinOne}
${dolphinTwo}
${dolphinThree}
With an avarage score of: ${dolphinsAvarage}`);

console.log(`Koalas scored:
${koalaOne}
${koalaTwo}
${koalaThree}
With an avarage score of: ${koalaAvarage}`);

if (dolphinsAvarage > koalaAvarage && dolphinsAvarage >= 100) {
    console.log(`The winners of gymnastics tournament are Dolphins!`);
} else if (koalaAvarage > dolphinsAvarage && koalaAvarage >= 100) {
    console.log(`The winners of gymnastics tournament are Koalas!`);
} else if (dolphinsAvarage <= 100 && koalaAvarage <= 100) {
    console.log(`Both teams scored below 100, noones take home the throphy! :(`)
} else {
    console.log(`It's a TIE!`);
}
*/

//              CHALLANGE 4 

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)








