'use strict';

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliveri: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

//        STRINGS #3 SPLIT & JOIN

console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Schmedtmann`.split(` `));

const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  // const n = name.toLowerCase();
  const names = name.toLowerCase().split(` `);
  const namesUpper = [];

  for (const word of names) {
    // namesUpper.push(word[0].toUpperCase() + word.slice(1));
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};

capitalizeName(`jessica ann smith davis`);
capitalizeName(`rudolfs petrOvskis`);

//  Padding (total length)

const message = `Go to gate 23!`;
console.log(message.padStart(25, `+`).padEnd(30, `+`));
console.log(`Jonas`.padStart(20, `+`).padEnd(30, `+`));

const maskCreditCard = function (number) {
  const str = number + ``; //Convert to string
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(433321331233123));
console.log(maskCreditCard(`31231545333`));

// Repeat

const message2 = `Bad weather... All departures delayed... `;

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
/*
//        STRINGS #2

const airline = `TAP Air Portugal`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// FiX capitalization in name

const passanger = `jOnAs`; // Jonas
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);

console.log(passangerCorrect);

const nameCap = function (name) {
  const nameLower = name.toLowerCase();
  const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(correctName);
};
nameCap(`lkjDSALDJlkjljJJK`);

// Comparing email

const email = `hello@jonas.io`;
const loginEmail = `  Hello@jonas.Io \n`;

const lowerEmail = loginEmail.toLowerCase();

// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail === email);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);
console.log(email, normalizedEmail);

const emailCompare = function (correctMail, checkMail) {
  const normalizedCheckMail = checkMail.toLowerCase().trim();
  console.log(correctMail);
  console.log(normalizedCheckMail);
  console.log(correctMail === normalizedCheckMail);
};
emailCompare(`suns@inbox.lv`, `suNS@iNbOx.lv`);

// Replacing

const priceGB = `288,97$`;
const priceUS = priceGB.replace(`$`, `&`).replace(`,`, `.`);
console.log(priceUS);

const announcment = `All passangers come to boarding door 23. Boarding door 23!`;

console.log(announcment.replaceAll(`door`, `gate`));

console.log(announcment.replace(/door/g, `gate`)); //If not using replace all

//    BOOOLEANS

const plane = `Airbus A320neo`;
console.log(plane.includes(`A320`));
console.log(plane.includes(`poo`));

console.log(plane.startsWith(`Air`));
console.log(plane.startsWith(`Airs`));

if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`))
  console.log(`New Generation plane`);

// Pratice Excercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`You are not allowed on board`);
  } else console.log(`Welcome on board`);
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
*/

/*
//        STRINGS #1

const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(`B737`[0]);

console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4)); // Position where starts
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B && E are middle seats
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) console.log(`You got the middle seat 👎`);
  else console.log(`You got Lucky 🥇`);
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(typeof new String(`Jonas`));

console.log(typeof new String(`Jonas`).slice(1));
*/

/*
//        MAPS ITERRATONS

const question = new Map([
  [`question`, `What is the best programming language in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Correct 🎉`],
  [false, `Try again`],
]);

console.log(question);

// Convert Object to Map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// Quizz app
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}

// console.log(question.get(`correct`));
// const answer = Number(prompt(`Your answer:`));
const answer = 3;
console.log(answer);

// if (answer === question.get(`correct`)) {
//   console.log(question.get(true));
// } else console.log(question.get(false));

console.log(question.get(question.get(`correct`) === answer));

// Convert map to array

console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
//        MAPS BASIC
const rest = new Map();
rest.set(`name`, `Classico Italiano`);
rest.set(1, `Firenze, Italy`);
console.log(rest.set(2, `Lisabon, Portugal`));

rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open`)
  .set(false, `We are closed`);

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(`1`));

const time = 8;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

console.log(rest.has(`categories`));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, `Test1`);
rest.set(document.querySelector(`h1`), `Heading`);

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
//        SETS

const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);
console.log(ordersSet);

console.log(new Set(`Jonas`));

console.log(ordersSet.size);

console.log(ordersSet.has(`Pizza`));
console.log(ordersSet.has(`Bread`));

ordersSet.add(`Garlic bread`);
ordersSet.add(`Garlic bread`);
ordersSet.delete(`Risotto`);
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
);

console.log(new Set(`jonaschmedtmann`).size);
*/

/*
// PROPERTY NAMES
const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property Values

const values = Object.values(hours);
// console.log(values);

const entries = Object.entries(hours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/* //     LOOOPS
if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

// console.log(restaurant.hours.mon.open);
// With optional chaining

console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

// Example
const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

for (const day of days) {
  // console.log(day);
  const open = restaurant.hours[day]?.open ?? `closed`;
  console.log(`On ${day} we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// Arrays
const users = [{ name: `Jonas`, email: `hello@jonas.io` }];

console.log(users[0]?.name ?? `User array empty`);

if (users.length > 0) console.log(users[0].name);
else console.log(`User array empty`);
*/

/*
//        FOR OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}
*/

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values are null && undefiend (Not 0 or ``)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*

/*
console.log(`------- OR --------`);
// Use any data type, return ANY data type, short-circuting
console.log(3 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || `` || `Hello` || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`------- AND --------`);
console.log(0 && `Jonas`);
console.log(7 && `Jonas`);

console.log(`hello` && 23 && null && `Jonas`);

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza(`Mushrooms`, `Spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`Mushrooms`, `spinach`);
*/

/*
// 1) Destructuring

// Spread because on the right side of =
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST, because on left
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objets

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2)Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`Mushrooms`, `onion`, `olives`, `desa`);
restaurant.orderPizza(`Mushrooms`);
*/

/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Join 2 or more arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = `Jonas`;
const letters = [...str, ` `, `S.`];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real world example
// const ingridients = [
//   prompt(`Let's make pasta!\n Ingridient 1?`),
//   prompt(`Ingridient 2?`),
//   prompt(`Ingridient 3?`),
// ];
// console.log(ingridients);

// restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
// restaurant.orderPasta(...ingridients);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;

console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
restaurant.orderDeliveri({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDeliveri({
  address: `Stirnu iela 45-16`,
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested distructioring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
