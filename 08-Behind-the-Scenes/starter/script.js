'use strict';

/*
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
*/

/*
const jonas = {
  year: 1991,
  calcAge() {
    console.log(this);
    console.log(2037 - this.year);
  },
};

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

*/
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    
    solution 1
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

   
    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};

jonas.calcAge();

function addExpr(a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);
*/

/*
const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me.age);

// here we are just pointing to the same address of object so even if we change only one (me or friend) both will affect the real object that they are pointing at

*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// here all works in a very intuitive way, which we are really changing the values into the call stack, but when we talk about where objects behave things change a little

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// remember that even using const we can update the infos into jessica object because the variable jessica is nothing more than an address to the real object (which is in HEAP)

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['arroz', 'joao'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('sergio');
jessicaCopy.family.push('lucas');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// here we see that we do can clone an object with a new address but only in shallow level, sub objects will
// both apply to the same value
