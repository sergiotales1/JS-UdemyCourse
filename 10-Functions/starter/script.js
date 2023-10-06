'use strict';

/*
const bookings = []

const createBooking = function(flightNum, numPassengers = 1, price = 199*numPassengers){
  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log(booking)
  bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 20)
createBooking('LH123', undefined, 1000)


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24637272894,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  
  if (passenger.passport === 24637272894) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

const newPerson = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

checkIn(flight, jonas);
console.log(flight, jonas);
newPerson(jonas);
console.log(jonas);

// copying the value to another variable (flight to flightNum)
let flightNum = flight;
console.log(flightNum);
console.log(flight);
flightNum = 'LH222';
console.log(flightNum);
console.log(flight);

// copying the ADDRESS of the object to another variable (jonas to jonas1)
let jonas1 = jonas;
console.log(jonas);
console.log(jonas1);
jonas1.name = 'Sergio';
console.log(jonas);
console.log(jonas1);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function

const transformer = function (str, fn) {
  console.log(`The original string was: ${str}`);
  console.log(`The transformed string is: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Testing another string', oneWord);

['Jonas', 'Martha', 'Adam'].forEach(high5);
function high5() {
  console.log(`👌`);
}


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Sergio');

// Challenge
const greet1 = greeting => name => console.log(`${greeting} ${name}`);

greet1('Privet')('Sergio');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  
  lufthansa.book(232, 'Jonas');
  lufthansa.book(123, 'Sergio');
  
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  book.call(eurowings, 23, 'Abel Ferreira');
  book.call(lufthansa, 848, 'Mary Cooper');
  
  console.log(lufthansa);
  console.log(eurowings);
  
  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 999, 'Lula');

// Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(lufthansa, ...flightData);

// Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookLH(90, 'Veiga');
bookLX(28, 'Louis');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas');
bookEW23('Sergio');

// With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  
  this.planes++;
  console.log(this.planes);
};

document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const higherRate = function (rate) {
  return function (value) {
    return (value = value + value * rate);
  };
};

console.log(higherRate(0.1)(100));
const higherRatePT = higherRate(0.23);
console.log(higherRatePT(100));

*/
