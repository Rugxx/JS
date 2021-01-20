/*
// Challange #1
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const realDogs = julia.slice(1, 3);
const allDogs = realDogs.concat(kate);
// const allDogs = [...realDogs, ...kate];
console.log(realDogs);
console.log(allDogs);

allDogs.forEach(function (dog, i) {
  if (dog >= 3) {
    console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
  } else console.log(`Dog number ${i + 1} is still a puppy`);
});

console.log(`Teachers example`);

const checkDogs = function (dogsJul, dogsKate) {
  const dogsJuliaCorrected = dogsJul.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  // console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else console.log(`Dog number ${i + 1} is still a puppy`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

/*
// Challange #2

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 4 * age + 16));
  console.log(humanAges);
  const adultDogs = humanAges.filter((age) => age >= 18);
  console.log(adultDogs);
  // const averageHumanAge =
  //   adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  const averageHumanAge = adultDogs.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  console.log(averageHumanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
// Avg

// Challange #3

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// Challange #4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Adding recommended food element to each
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2

const dogSarah = dogs.find((dog) => dog.owners.includes(`Sarah`));
console.log(dogSarah);
console.log(
  `Sarah dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? `much` : `little`
  }`
);

// 3

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

const ownersEatToolittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch, ownersEatToolittle);

// 4

console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eats too much!`);
console.log(`${ownersEatToolittle.join(` and `)}'s dogs eats too little!`);

// 5

console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6

console.log(
  dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7

const dogsOkay = dogs
  .filter(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
  .map((dog) => dog.owners);

console.log(...dogsOkay);

// 8

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsCopy);
