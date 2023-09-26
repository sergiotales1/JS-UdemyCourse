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

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me.age);
