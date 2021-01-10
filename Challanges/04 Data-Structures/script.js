`use strict`;

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
