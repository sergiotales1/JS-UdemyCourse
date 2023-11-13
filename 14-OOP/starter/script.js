'use strict';

const Person = function(firstName, birthYear){
  this.firstName = firstName
  this.birthYear = birthYear

  // Never do this
  // this.calcAge = function(){
  //   console.log(2037 - this.birthYear)
  // }
}

const jonas = new Person('Jonas', 1991)
console.log(jonas)

console.log(jonas instanceof Person)
// jonas.calcAge()

// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear)
}

jonas.calcAge()

console.log(Person.prototype.isPrototypeOf(jonas))
console.log(Person.prototype.isPrototypeOf(Person))

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species)
console.log(jonas.hasOwnProperty('birthYear'))
console.log(jonas.hasOwnProperty('species'))
