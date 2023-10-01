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

// 1-
const goalsEntries = Object.entries(game.scored);
console.log(goalsEntries);
for (let [goal, name] of goalsEntries) {
  console.log(`Goal ${Number(goal) + 1}: ${name}`);
}

// 2-
let oddsValues = Object.values(game.odds);
let result = 0;
for (let i = 0; i < oddsValues.length; i++) {
  result += oddsValues[i] / oddsValues.length;
}
console.log(result.toFixed(2));

// 3-

console.log(Object.entries(game.odds));
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? `draw: ${odd}` : `victory ${game[team]}: ${odd}`;
  console.log(`Odd of ${teamStr}`);
}

// bonus

let scorers = {};
for (let item of game.scored) {
  scorers[item] ? scorers[item]++ : (scorers[item] = 1);
}

console.log(scorers);
