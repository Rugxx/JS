`use strict`;

// CHALLANGE 4

//   namesUpper.push(word.replace(word[0], word[0].toUpperCase()));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;

  const rows = text.split(`\n`);
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split(`_`);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${`✅`.repeat(i + 1)}`);
    // console.log(first, second); sasplitto
  }
});

`underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure`;
// const converter = function (name) {
//   const n = name.toLowerCase().split(`_`);
//   const newN = [];

//   for (const word of n) {
//     newN.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(newN.join(``));
// };

// // for (const word of names) {
// //   // namesUpper.push(word[0].toUpperCase() + word.slice(1));
// //   namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
// // }

// converter(`underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure`);

/*
// Challange #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// console.log(gameEvents);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

let sum = 0;
// 3)

console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();

console.log(time);

console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

// for (const key of gameEvents.keys()) {
//   sum += key;
// }
// console.log(sum / 90);
// console.log(
//   `An event happened, on avarage, every ${Math.trunc(sum / 90 + 0.5)} minutes`
// );

// 4)

// for (const [key, value] of gameEvents) {
//   if (typeof key === `number` && key < 45) {
//     console.log(`${gameEvents.get(true)} ${key}: ${value}`);
//   } else console.log(`${gameEvents.get(false)} ${key}: ${value}`);
// }

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// console.log(gameEvents.get(gameEvents.get(``)));

// console.log(question.get(question.get(`correct`) === answer));
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
// }
*/

/*
//        CHALLANE #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Challange 2

// 1)

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2)

let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);

// 3)

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

// CHALLANGE 1
/*
// 1

const [players1, players2] = game.players;
console.log(players1, players2);

// 2

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4

const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
console.log(players1Final);

// 5
// const { team1, draw, team2 } = game.odds;
// console.log(team1, draw, team2);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored by: ${players}`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Lewandowski', 'Kimmich');

printGoals(...game.scored);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7

team1 < team2 && console.log(`Team one is more likely to win`);
team1 > team2 && console.log(`Team two is more likely to win`);
*/
