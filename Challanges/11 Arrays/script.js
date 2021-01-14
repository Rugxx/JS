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
