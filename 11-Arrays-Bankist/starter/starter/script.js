'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// creating usernames

accounts.forEach(
  acc =>
    (acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(cur => cur[0])
      .join(''))
);

let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  // we are looping through the accounts array and the objects to find the inputLogin
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value && acc.pin === Number(inputLoginPin.value)
  );

  if (currentAccount) {
    containerApp.style.opacity = 100;
    displayUI(currentAccount.movements);
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  }
});

// transfer money
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  let receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  let transferAmount = Number(inputTransferAmount.value);

  if (receiverAcc && transferAmount < currentAccount.balance && receiverAcc !== currentAccount) {
    currentAccount.movements.push(-transferAmount);
    receiverAcc.movements.push(transferAmount);
    displayUI(currentAccount.movements);
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
  }
});
function displayUI(move) {
  // sum deposit and withdrawal
  let deposits = currentAccount.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur);
  let withdrawals = Math.abs(
    currentAccount.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur)
  );
  currentAccount.balance = deposits - withdrawals;
  labelBalance.textContent = currentAccount.balance + '€';
  containerMovements.innerHTML = '';
  labelSumIn.textContent = deposits + '€';
  labelSumOut.textContent = withdrawals + '€';

  // interest = 10% of every deposit
  labelSumInterest.textContent = Math.trunc(deposits * 0.01) + '€';

  let html = '';
  move.forEach((element, i) => {
    let type = '';
    if (element > 0) {
      type = 'deposit';
    } else {
      type = 'withdrawal';
    }
    html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + ' ' + type.toUpperCase()
    }</div>
          <div class="movements__date"></div>
          <div class="movements__value">${element}€</div>
        </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  if (currentAccount.balance * 0.1 > Number(inputLoanAmount.value)) {
    currentAccount.balance += Number(inputLoanAmount.value);
    inputLoanAmount.blur();
    currentAccount.movements.push(Number(inputLoanAmount.value));
    inputLoanAmount.value = '';
    displayUI(currentAccount.movements);
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    accounts.splice(accounts.indexOf(currentAccount), 1);
    inputClosePin.value = inputCloseUsername.value = '';
    inputClosePin.blur();
    containerApp.style.opacity = 0;
  }
});

let sort = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  sort = !sort;
  console.log(sort);
  const movementsCopy = currentAccount.movements.slice().sort((a, b) => a - b);
  if (sort) {
    displayUI(movementsCopy);
  } else {
    displayUI(currentAccount.movements);
  }
});
