'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-01-28T17:01:17.194Z',
    '2021-01-29T23:36:17.929Z',
    '2021-01-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDates = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDates(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
// ////////////

// Day/month/year

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Creating current Date
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2.0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Trasnfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//        Converting and checking numbers
/*
console.log(23 === 23.0);

// Base 10 - 0 to 9
// Bonary base 2 - 0 to 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log(Number(`23`));
console.log(+`23`); // Auto converts to numbers

// Parsing (Need to start with a number)

console.log(Number.parseInt(`30px`, 10));
console.log(Number.parseInt(`e23`, 10));

console.log(Number.parseFloat(` 2.5rem`)); // GO TO
console.log(Number.parseInt(`  2.5rem`));

console.log(parseFloat(`  2.5rem`));

// Check if NaN (Not recommended)
console.log(Number.isNaN(20));
console.log(Number.isNaN(`20`));
console.log(Number.isNaN(+`20X`));
console.log(Number.isNaN(23 / 0)); // infinity no a NaN

// Check if a value is number GO TO
console.log(Number.isFinite(20));
console.log(Number.isFinite(`20`));
console.log(Number.isFinite(+`20X`));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(`23`));
console.log(Number.isInteger(23 / 0));
*/

//        Math and Rounding
/*
console.log(Math.sqrt(36));
console.log(36 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(1, 2, 3, 66, 123, 95, 22));
console.log(Math.max(1, 2, 3, 66, `123`, 95, 22));
console.log(Math.max(1, 2, 3, 66, `123x`, 95, 22));

console.log(Math.min(1, 2, 3, 66, 123, 95, 22));

console.log(Math.PI * Number.parseFloat(`10px`) ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0....1 -> 0...(max-min) -> min...max
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.6));
console.log(Math.round(23.3));

console.log(Math.ceil(23.3));
console.log(Math.ceil(`23.9`));

console.log(Math.floor(`23.3`));
console.log(Math.floor(23.3));

// Floor & trunk do the same for > 0 numbers
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3)); // rounding works the other way around

// Floating point numbers (decimals)
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(4));
*/

//        Remainder Operator
/*
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);

const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener(`click`, function () {
  [...document.querySelectorAll(`.movements__row`)].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = `orangered`;
    if (i % 3 === 0) row.style.backgroundColor = `blue`;
  });
});
*/

//        BigInt
/*
// Not saved after that
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 10);
console.log(2 ** 53 + 100);
console.log(2 ** 53 + 14);

console.log(31231232131231231231245345n);
console.log(BigInt(31231232131231231231245345n));

// Operations

// console.log(Math.sqrt(20n));

console.log(10000n + 10000n);
console.log(31231232135243242342n * 312312321312312n);

const huge = 321312312093128290n;
const num = 23;

console.log(huge * BigInt(num));

// Exception when num can be done with bigiNT
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);
console.log(typeof 20n);

console.log(huge + ` Is really big`);

// Divisions
console.log(10n / 3n); // floors, removes decimal part
console.log(10 / 3);
*/

//        DATES N TIME

/*
// create a date

const now = new Date();
console.log(now);

console.log(new Date(`Sun Jan 31 2021 11:13:13`));
console.log(new Date(`December 24, 2015`));
console.log(new Date(account1.movementsDates[0]));

// Month is zero based (0 - Jan)
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));
// Day/h/min/s/ms
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142249780000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

//        Operation with dates
// /*

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);
console.log(days1);
