'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      var millenial = true; // Var works for the whole function scope
      //   Creating a new variable within a scope with the same name
      //reassigning outer scope's variable
      output = `New OUTPUT`;

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    // console.log(add(2, 3));
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);
*/

/*
// Variable
console.log(me);
// console.log(job);
// console.log(year);

var me = `Jonas`;
let job = `teacher`;
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/

// console.log(this);

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //   console.log(this);
};

calcAgeArrow(1981);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

*/

/*
// var firstName = `Matilda`;

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution two
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Arguments key word
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 7, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 3, 5);

*/

/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: `Jonas`,
  age: 30,
};
const friend = me;
friend.age = 27;
console.log(`Friend: `, friend);
console.log(`Me: `, me);
*/

// Primitive types
let lastName = `Williams`;
let oldLastName = lastName;

lastName = `Davis`;

console.log(lastName);
console.log(oldLastName);

// Refferecne type
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;

// console.log(`Before marriage: `, jessica);
// console.log(`After marriage: `, marriedJessica);

// marriedJessica = {};

// Copying Objects

const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const JessicaCopy = Object.assign({}, jessica2);
JessicaCopy.lastName = `Davis`;

JessicaCopy.family.push(`Mary`);
JessicaCopy.family.push(`John`);

console.log(`Before marriage: `, jessica2);
console.log(`After marriage: `, JessicaCopy);
// deep clone is needed (lib)
