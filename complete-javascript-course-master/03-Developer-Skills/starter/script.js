// Remember, we're gonna use strict mode in all scripts now!
("use strict");

/*
const x = 23;

if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(`yolo`);

console.log(calcAge(1995));

const numuri = [3, 4, 5, 6, 7, 8, 9, 10];

const summa = function (arr) {
  let sum = 0;
  for (let i = 0; i < numuri.length; i++) {
    sum += arr[i];
  }
  return sum / numuri.length;
};

console.log(summa(numuri));

const smootie = function (slices) {
  const banana = slices * 4;
  return banana;
};

console.log(smootie(5));

const result = function (det) {
  const n2 = smootie(det);
  return n2;
};

console.log(result(3));
*/

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// Apmlitude: difference between the highest and the lowest temp
// how to compute the max and min temp
// What is a sensor Error and what to do?

// how to Ignore errors
// Find max value temp
// Find min value temp
// subtract min from max (amplitude) and return

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp != `number`) continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem: func should retrieve 2 arrays
// should merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp != `number`) continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
