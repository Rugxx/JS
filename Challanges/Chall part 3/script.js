// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

let str = "";
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  return `${str} ...`;
};

console.log(printForecast(data2.concat(data1)));

// Create a loop for temperatures
// get output in one line
// add ending ...

// let s = "";
// for (let i = 1; i < 11; i += 1) {
//   s += i + " ";
// }
// console.log(s);
