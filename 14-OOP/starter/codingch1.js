// 1-
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log('ACCELERATE!');
  console.log(`The car ${this.make} is now at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log('Brake!');
  console.log(`The car ${this.make} is now at ${this.speed} km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerate();
car1.accelerate();
car1.brake();

console.log('-----------------');

car2.accelerate();
car2.accelerate();
car2.brake();
