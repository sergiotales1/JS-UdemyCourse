'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-11-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2023-11-01T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();

  //   return `${day}/${month}/${year}`;
  // }

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  let time = 120;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Fake always logged in

btnLogin // day/month/year
  .addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === +inputLoginPin.value) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;

      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      };

      labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

      // const day = `${now.getDate()}`.padStart(2, 0);
      // const month = `${now.getMonth() + 1}`.padStart(2, 0);
      // const year = now.getFullYear();
      // const hour = now.getHours();
      // const min = `${now.getMinutes()}`.padStart(2, 0);
      // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

      if (timer) clearInterval(timer);
      timer = startLogOutTimer();
      // Update UI
      updateUI(currentAccount);
    }
  });

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Conversion
/*
console.log(Number('23'));
console.log(+'23'); // both are the same

// Parsing
console.log(Number.parseInt('30px', 10)); // this 10 is the base (10 = 0 to 9, 2 = 0 1)
console.log(Number.parseInt('a 20')); // don't parse when have a letter before the number
console.log(Number.parseInt('    2.5rem      '));
console.log(Number.parseFloat('    2.5rem      '));

// Check if is NaN (not a number)
console.log(Number.isNaN('22'));
console.log(Number.isNaN(true));
console.log(Number.isNaN(+'20px'));
console.log(Number.isNaN(23 / 0));

// check if is a finite number
console.log(Number.isFinite(20));
console.log(Number.isFinite(+'20px')); // this is not finite but a NaN
console.log(Number.isFinite(23 / 0));

// square root
// how to calculate square root into js
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(9 ** (1 / 3));

console.log(Math.max(5, 19, 8, 7, 20, 90));
console.log(Math.min(5, 19, 8, 7, 20, 90));
console.log(Math.min(5, '19', 8, 7, 20, 90)); // also does coercion

// round
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (max, min) => Math.trunc(Math.random() * (max - min) + min) + 1;
// this function does for ex 20 - 10 = 10 + 10 (in that way we will never receive a number minor than 10 and at the same time if we do receive 0 we will add min (10) avoiding this 0 value)
console.log(randomInt(20, 10));

// round - throws away decimal part
console.log(Math.round(3.2));

// ceil - rounds to more
console.log(Math.ceil(3.4)); // 4

// floor - rounds down
console.log(Math.floor(3.4)); // 3

// difference between floor and trunc
console.log(Math.trunc(-23.3)); // trunc is chocker
console.log(Math.floor(-23.3));

// using toFixed() <---- this will fix the decimal part round and limiting to the param sent
console.log(+(3.454).toFixed(1)); // returns a string so we use + to convert to number

console.log(194 % 31);

const isEven = n => n % 2 === 0;

console.log(isEven(2));
console.log(isEven(23));
console.log(isEven(98));

labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    i % 2 === 0 ? (row.style.backgroundColor = 'orange') : (row.style.backgroundColor = 'blue');
  });
});

// numeric separators

// 192,020,200
console.log(192_020_200);

// this allows us to separate numbers in order to make more readable

// how to catch the users time and date
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
console.log(new Intl.DateTimeFormat('en-US', options).format(now));
const locale = navigator.language;
console.log(locale);
console.log(new Intl.DateTimeFormat(locale, options).format(now));


const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'JPY',
};

const num = 2020293930293;
const numFormat = new Intl.NumberFormat('en-US', options).format(num);

console.log('US: ', numFormat);

console.log(
  navigator.language + ': ' + new Intl.NumberFormat(navigator.language, options).format(num)
);


const ingredients = ['olives', 'spinach', 'tomato'];

// setTimeout
const pizzaTimer = setTimeout(
  (ing1, ing2, ing3) => console.log(`Here is your pizza with ${ing1} and ${ing3}`),
  3000,
  ...ingredients
);
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, '0');
  const minutes = `${now.getMinutes()}`.padStart(2, '0');
  const seconds = `${now.getSeconds()}`.padStart(2, '0');
  console.log(`${hour}:${minutes}:${seconds}`);
}, 1000);

*/
