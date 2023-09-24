'use strict';

function calcAge(birthYear) {
  let age = 2037 - birthYear;

  function printAge() {
    console.log(`${firstName}, you are ${age}, born in ${birthYear}`);
  }
  printAge();
  return age;
}

const firstName = 'Sergio';
calcAge(1991);
