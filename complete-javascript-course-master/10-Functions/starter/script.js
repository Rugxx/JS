'use strict';

/*
//              BASICS

const bookings = [];

const createBooking = function (
  flightNum,
  numPassanger = 1,
  price = 199 * numPassanger
) {
  // ES5
  //   numPassanger = numPassanger || 1; //default value
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 5);

createBooking(`LH123`, undefined, 1000);
*/

/*
//              Value vs Reference interacting with objects

const flight = `LH234`;
const jonas = {
  name: `Jonas Schmedtmann`,
  passport: 123456778,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  jonas.name = `Mr. ` + passenger.name;

  if (passenger.passport === 123456778) {
    alert(`Check in`);
  } else {
    alert(`Wrong passport`);
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
//              First-Class and Higher-Order

const oneWord = function (str) {
  return str.replaceAll(` `, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher order function takes in func
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);

transformer(`JavaScript is the best!`, oneWord);

// JS uses callbacks all the time
const highFive = function () {
  console.log(`👋`);
};

document.body.addEventListener(`click`, highFive);

[`Jonas`, `Martha`, `Artur`].forEach(highFive);
*/

/*
//              FUNCTION RETURNING

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey`);

greeterHey(`Jonas`);
greeterHey(`Steven`);

greet(`Hello`)(`Jonas`);

const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);
const greeterHey2 = greet2(`Loxs`);
greeterHey2(`Mikus`);
*/

// /*
//              Call and apply Methods

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  //   book: function()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(635, `John Smith`);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
  //   book: lufthansa.book,
};

// eurowings.book(2559, `Jonas Schmedtmann`);
// eurowings.book(6356, `John Smith`);
// console.log(eurowings.bookings);

const book = lufthansa.book;

// Does not work
// book(23, `Sarah Williams`);
// Call method

book.call(eurowings, 23, `Sarah Williams`);
console.log(eurowings);

book.call(lufthansa, 239, `Mary Copper`);
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `SAL`,
  bookings: [],
};

book.call(swiss, 887, `Ruuzha Valis`);

// Apply method not that used

const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);

book.call(swiss, ...flightData); //This much better
console.log(swiss);
// */

// /*
//              Bind Method

// book.call(eurowings, 23, `Sarah Williams`);

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
const bookSAL = book.bind(swiss);

bookEW(12, `Steven Williams`);

const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Rizhaa Chozas`);
bookEW23(`Martha COOOPER`);

// WITH EventListeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlanes();

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlanes.bind(lufthansa));

//   Partial application PAY ATTENTION TO THE ARGUMENTS ORDER

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(150));
console.log(addVAT(180));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(150));
console.log(addVAT2(180));
