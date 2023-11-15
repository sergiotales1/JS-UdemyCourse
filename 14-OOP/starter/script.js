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


class Car {
  constructor(make, speed) {
    this.make = make;
    this._speed = speed;
  }

  accelerate() {
    this._speed += 10;
    console.log(`${this.make} is at ${this.speed} km/h`);
  }

  brake() {
    this._speed -= 5;
    console.log(`${this.make} is at ${this.speed} km/h`);
  }

  get speedUS() {
    return this._speed / 1.6;
  }

  set speedUS(speed) {
    this._speed = speed * 1.6;
  }
}

const ford = new Car('ford', 120);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);


const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hello my name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();
console.log(mike);

Student.prototype.constructor = Student;

////////////////////////////////////////////
// Coding challenge #3

const CarCl = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

CarCl.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

CarCl.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

//1-

const EV = function (make, speed, charge) {
  CarCl.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarCl.prototype);

// 2-

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3-
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h and still have ${this.charge}% of battery`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(100);
console.log(tesla);
tesla.accelerate();
tesla.brake();


class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be declared into prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('This is not a full name');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hello there');
  }
}

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always happens first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student i feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

*/

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
