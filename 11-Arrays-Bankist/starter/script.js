'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0); // that creates a new property into acc obj with the balance
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcome = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

function createUsernames(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
}
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;
btnLogin.addEventListener('click', e => {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  let receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  let amount = Number(inputTransferAmount.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add amount into acc balance
    currentAccount.movements.push(amount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    inputCloseUsername.value = inputClosePin.value = '';
    let index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// Doesn't change the array

console.log(arr.slice(1));
console.log(arr.slice(2, 4));
console.log(arr.slice(-4, -3));

// into slice you will SLICE according the start and end index for example arr.slice(2, 4) will not count 4 as well and will show ['c', 'd']
// remember that the length of the slice is corresponding the end - final (4 - 2 = 2)

console.log(arr.slice()); // create a copy of the array as same as...
console.log([...arr]);

console.log('-splice-');
// SPLICE
// Does change the array
// console.log(arr.splice(2));
console.log(arr); // here we can see that splice actually removes the items under the index sent

// to remove the last element of array as same as .pop() you use:
arr.splice(-1);
console.log(arr);

// now with SPLICE you will have 2 params, the first is the start and the second is the amount of removed elements that you want
// for example arr.splice(1, 2) will remove ['b', 'c']
arr.splice(1, 2);
console.log(arr);

console.log('-REVERSE-');

// REVERSE
// Does mutate the array

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


// AT method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

// there you got the last element
console.log(arr.at(-2));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// USING FOR OF
for (let movement of movements) {
  if (movement > 0) {
    /    console.log(`You deposited ${movement}`);
} else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

for (let [i, movement] of movements.entries()) {
  if (movement > 0) {
console.log(`Movement ${i + 1}: You deposited ${movement}`);
} else {
  console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}
}

// USING FOR EACH
console.log('-');
movements.forEach(movFun);

function movFun(mov, i, arr) {
if (mov > 0) {
console.log(`Movement ${i + 1}: You deposited ${mov}`);
} else {
console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
}
}

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'USD', 'EUR', 'GBP']);
currenciesUnique.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- MAP -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSD);

const movementsDescription = movements.map(
(mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'}: ${Math.abs(mov)}`
);
console.log(movementsDescription);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- FILTER -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositMovements = movements.filter(mov => mov > 0);
const withdrawalMovements = movements.filter(mov => mov < 0);
console.log(depositMovements);
console.log(withdrawalMovements);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- REDUCE -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration #${i}, accumulator: ${acc}`);
  return acc + cur;
}, 0);

const maxValue = movements.reduce((acc, cur) => (acc < cur ? (acc = cur) : acc), 0);
console.log(maxValue);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositsUSD);


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- FIND -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Returns the first value found with that requisite
const firstWithDrawal = movements.find(mov => mov < 0);
console.log(firstWithDrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (let acc of accounts) {
  if (acc.owner === 'Sarah Smith') console.log(acc);
}

const dog1 = {
  name: 'Carlos Alberto',
  age: 2,
};
const dog2 = {
  name: 'Celso',
  age: 3,
};
const dog3 = {
  name: 'Alex',
  age: 4,
};

const dogs = [dog1, dog2, dog3];

console.log(dogs.find(name => name.name === 'Carlos Alberto'));
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));
console.log(movements.includes(5000));

// CONDITION
console.log(movements.some(mov => mov < 0));
console.log(movements.some(mov => mov > 5000));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log('- - - EVERY - - -');
console.log(movements.every(mov => mov > 0));

// array with every value +
const positiveArr = [200, 300, 400, 80, 90];
console.log(positiveArr.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;

console.log(movements.every(deposit)); // says that not every value is positive
console.log(movements.some(deposit)); // says that has some positive value in movements array
console.log(movements.filter(deposit)); // filter only the positive values 
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeeper = [[[1, 2], 3], [[[4], 5], 6], [7], 8];
console.log(arrDeeper.flat(3));

// the param send is the profundity level

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
// console.log(overallBalance);

// flat
const chained = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, cur) => acc + cur);
console.log(chained);

// flatMap - only 1 level deep
const chained2 = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur);
console.log(chained2);

// SORTING
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Challenge
// const diceRolls = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 100));
// console.log(diceRolls);

labelBalance.addEventListener('click', () => {
  // transform nodeList into array and automatically use a call back function to pass through the array and transform every element into a number
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), cur =>
    Number(cur.textContent.replace('€', ''))
    );

    // Same as =
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
    
  console.log(movementsUI2.map(e => Number(e.textContent.replace('€', ''))));
  console.log(movementsUI);
});


/////////////////////////////////////////////////////////////
// Array Methods Practice
// 1.
const depositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((acc, cur) => acc + cur, 0);
console.log(depositSum);

// 2.
// const numDeposit1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// console.log(numDeposit1000);
const numDeposit1000 = accounts
.flatMap(acc => acc.movements)
.reduce((acc, cur) => (cur > 1000 ? ++acc : acc), 0);
console.log(numDeposit1000);
const { deposits: dep, withdrawals: wit } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      // return acc;
      acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
    );
    console.log(dep, wit);
    
    // 4.
    // this is a nice word -> This is a Nice Title
    const convertTitleCase = title => {
      const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'in', 'on', 'with', 'is', 'one'];
      let titleCase = title
      .toLowerCase()
      .split(' ')
      .map((word, i) =>
      exceptions.includes(word) && i !== 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(' ');
      
      return titleCase;
    };
    
    console.log(convertTitleCase('This is an actual title'));
    
    console.log(convertTitleCase('and this is good but not precisely a title'));
    
    console.log(convertTitleCase('well this is another one haha'));
    
*/
// coding challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const sarahDog = dogs.find(element => element.owners.includes('Sarah'));
console.log(
  sarahDog.curFood > sarahDog.recommendedFood
    ? `${sarahDog.owners[0]}'s dog is eating too much`
    : `${sarahDog.owners[0]}'s dog is eating too little`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(cur => cur.curFood > cur.recommendedFood)
  .flatMap(cur => cur.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(cur => cur.curFood < cur.recommendedFood)
  .flatMap(cur => cur.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(ownersEatTooMuch.join(' and ').concat("'s dogs eat too much"));
console.log(ownersEatTooLittle.join(' and ').concat("'s dogs eat too little"));

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
console.log(dogs);

// 6.
console.log(
  dogs.some(
    dog => dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9
  )
);

// 7.
const okayDogs = dogs.filter(
  dog => dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9
);
console.log(okayDogs);

// 8.
const dogsCopy = Array.from(dogs);
console.log(dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood));
