const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1-
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2-
gameEvents.delete(64);
console.log(gameEvents);

// 3-
let time = [...gameEvents.keys()].pop();
console.log(gameEvents);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4-
for (const [min, event] of gameEvents) {
  let timer = 45;
  console.log(`[${(min > timer && 'SECOND HALF') || 'FIRST HALF'}] ${min}: ${event}`);
}
