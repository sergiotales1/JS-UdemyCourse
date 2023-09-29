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
const [players1, players2] = [...game.players];
// console.log(players1);

// 2-
const [gk, ...fieldPlayers] = players1;
const [gk1, ...fieldPlayers1] = players2;

// console.log(gk, fieldPlayers);

// 3-
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4-
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5-
const { team1: team1, x: draw, team2: team2 } = game.odds;

// console.log(team1);
// console.log(draw);
// console.log(team2);

// 6-
printGoals(...game.scored);
function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(players.length);
}

// 7-
console.log(team1 > team2 || team2 < team1);