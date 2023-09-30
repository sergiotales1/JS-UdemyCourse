'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[2]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );

    // const { time, address, mainIndex, starterIndex } = obj;
    // console.log(time, address, mainIndex, starterIndex);
  },
  openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? '';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Using nullish operator if we receive a null or undefined value we will print the other value with is the string 'Method does not exist'

// Arrays

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name || 'User array empty');

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// destructuring arrays
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR assignment operator

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator null or undefined
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// restaurant.guestNum = undefined;
// restaurant.guestNum = null;
restaurant.guestNum = 0;
// const guests1 = restaurant.guestNum || 10;

// Nullish: null and undefined (NOT 0 or '')
const guest1 = restaurant.guestNum ?? 10;
console.log(guest1);

// Use ANY data-type, return ANY data-type, short-circuiting
console.log('-------- OR --------');
console.log(3 || 'test');
console.log('' || 'test');
console.log(0 || undefined || 'test');
console.log('hello' || 'test');
console.log(0 || undefined || '' || null || 'hello');

const guests1 = restaurant.guestsNum ? restaurant.guestsNum : 10;
console.log(guests1);

restaurant.guestsNum = 2;
const guests2 = restaurant.guestsNum || 10;
console.log(guests2);
// OR operator will consider the first truthy value and will only show this value or the last value if all values are falsy

console.log('-------- AND --------');
console.log(0 && 'Jonas');
console.log(23 && 'Jonas' && null && 'test');

// Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'olives');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'olives');

// AND operator will consider the first false value, because both values have to be true and if we get a false value automatically will print this value cause the condition is already broken
// or will return the last value if all its truthy

// SPREAD, because is on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because is on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// Functions

const add = function (...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

console.log(add(1, 2, 3, 4, 5, 6));
const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

const ingredients = [
  // prompt("Let's make pasta! ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, Founder: 'Giuseppe', FoundedIn: 1992 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  starterIndex: 1,
  address: 'Via del Sole, 21',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7 };
({ a, b } = obj);

console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [1, 2, 3];

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

const [i = 1, j = 1, k = 1] = [9, 4];

console.log(i, j, k);
*/
