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

*/
