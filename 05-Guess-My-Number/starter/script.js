'use strict';
const checkEl = document.querySelector('.check');
let number = Math.floor(Math.random() * 20 + 1);
const guessValue = document.querySelector('.guess');
let score = document.querySelector('.score');
let labelEl = document.querySelector('.number');
let message = document.querySelector('.message');
const bodyEl = document.querySelector('body');
const again = document.querySelector('.again');

let score1 = 20;

checkEl.addEventListener('click', () => {
  if (guessValue.value == '') {
    message.textContent = '🛑 Incorrect value';
  } else {
    if (guessValue.value == number) {
      score += 0;
      labelEl.textContent = guessValue.value;
      document.querySelector('.highscore').textContent = score1;
      labelEl.style.width = '30rem';
      bodyEl.style.backgroundColor = '#60b347';
      message.textContent = 'Correct Number!';
    } else if (guessValue.value > number) {
      message.textContent = 'Too High...';
      score1--;
    } else {
      message.textContent = 'Too Low...';
      score1--;
    }
  }
  document.querySelector('.score').textContent = score1;
});

again.addEventListener('click', () => {
  score1 = 20;
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score1;
  bodyEl.style.backgroundColor = '#222';
  labelEl.textContent = '?';
  labelEl.style.width = '15rem';
  guessValue.value = '';
  number = Math.floor(Math.random() * 20 + 1);
});
