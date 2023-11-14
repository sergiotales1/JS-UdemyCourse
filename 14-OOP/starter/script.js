'use strict';

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function(){
  //   console.log(2037 - this.birthYear)
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

console.log(jonas instanceof Person);
// jonas.calcAge()

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
console.log(jonas.hasOwnProperty('birthYear'));
console.log(jonas.hasOwnProperty('species'));

// proto chain
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(Person.prototype.__proto__);

console.log(Person.prototype === jonas.__proto__);

console.dir(Array.prototype.find);
const arr = [2, 3, 4, 5, 6, 7, 2, 4, 5];
console.log(Array == new Array());

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);


*/
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be declared into prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('This is not a full name');
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica', 1996);

console.log(jessica);
console.log(PersonCl.prototype === jessica.__proto__);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.latest);
console.log(account);
