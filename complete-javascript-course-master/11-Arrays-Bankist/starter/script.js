'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``; //Mutates existing html values (removes if ``)
  // Slice copies
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
     <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html); // Quick & dirty
  });
};

// Calculate Balance with reduce() + arrow functions
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const intereset = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${intereset}€`;
};

// Mutate accounts array objects with forEach "sideeffect"
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

// Event Handlers

let currentAccount;

btnLogin.addEventListener(`click`, function (event) {
  // Prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  //  "?" works only if currentAccount exists
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields

    inputLoginUsername.value = inputLoginPin.value = ``;
    // .blur loses focus of Pin place
    inputLoginPin.blur();

    // Updare UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (event) {
  // preventing the page reload if button is in a form
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = ``;
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    // Check if receiver exists
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (event) {
  event.preventDefault();
  // console.log(`Fire`);

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add the movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ``;
});

// Switched between T & F (sorts on each click)
let sorted = false;

btnSort.addEventListener(`click`, function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Auto filling arrays / Creating

const arr = [1, 2, 3, 4, 5, 6];
console.log(new Array(2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5));

x.fill(1); // MUTATES
x.fill(4, 3, 5); //Starts at [3]
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const rnd = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 100) + 1
);

labelBalance.addEventListener(`click`, function () {
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    element => Number(element.textContent.replace(`€`, ``))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];
  console.log(movementsUI2);
});

// console.log(rnd);

// Math.trunc(Math.random() * 6) + 1;
//        Sorting
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owners.sort()); //Mutates
console.log(owners);

console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (keep  order)
// return > 0, B, A (switch order)
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// descending
movements.sort((a, b) => b - a);
console.log(movements);
*/

//        flat & flatMap
/*
// flat removes nested arrays
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [
  [
    [[1, 2], 3],
    [4, [5, 6]],
  ],
  7,
  8,
];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// // const overAllBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
// console.log(allMovements);

const overAllBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur);
console.log(overAllBalance);

// flatMap

const overAllBalance2 = accounts
  // flatMap goes only 1 level deep
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur);
console.log(overAllBalance2);
*/

//        Some and every
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// Checks only for equality
console.log(movements.includes(-130));

// Checks condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY check if all elements/variables match the condition

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

//        FIND returns only the first true value
/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);

for (const acc of accounts) if (acc.owner === `Jessica Davis`) console.log(acc);
*/

//        Implementing Login
// /*

//        CHAINING MAGIC
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// as long as returns [ARRAY] stops at reduce
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUsd);
*/

//        Map loops over and creates a new array
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });
const movementsUSD = movements.map(mov => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUSD);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`}: ${Math.abs(
      mov
    )}`
);

// {  if (mov > 0) {
  //     return `Movement ${i + 1}: You deposited: ${mov}`;
  //   } else {
    //     return `Movement ${i + 1}: You withdrew: ${Math.abs(mov)}`;
    //   }}
    
    console.log(movementsDescriptions);
*/

/*
//        FILTERS

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/*
//        REDUCE

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Accumulator is like a snowball "acc"
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iterration ${i}: ${acc} ${cur > 0 ? `+` : ``}${cur}`);
  return acc + cur;
}, 100); // by default 0

// Arrow method
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// max value

const maxValue = movements.reduce(function (acc, cur) {
  if (acc > cur) {
    return (acc = acc);
  } else {
    return (acc = cur);
  }
});

const maxValue2 = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(maxValue2);

console.log(maxValue);
*/

// ///////////////////////////////////////////
// const currencies = new Map([
//   ['USD', 'United States dollar'],
// ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
//        BASICS
let arr = [`a`, `b`, `c`, `d`, `e`];

// Slice Does not mutate the orriginal array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//  SPLICE Mutates the array

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse MUTATES THE ARRAY

arr = [`a`, `b`, `c`, `d`, `e`];
const arr2 = [`j`, `i`, `h`, `g`, `f`];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join(` - `));

// remember PUSH/SHIFT/POP/INDEXOF/INCLUDES
*/

/*
//        FOR EACH
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew: ${Math.abs(movement)}`);
  }
}

console.log(`----------FOREACH----------`);

// FIRST variable, SECOND index, THIRD entire array ALWAYS
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew: ${Math.abs(mov)}`);
    // console.log(arr);
  }
});
// YOU CANT BREAK IN FOREACH LOOP
// 0: function(200)
// 1: funtcion(450)
// 2: function(-400)
// ....
*/

//        MAPS & SETS

/*
// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value} `);
});

// SET Key is the same as value because it does not have KEY OR INDEX

const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

/*
//       CHALLANGE #1
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
