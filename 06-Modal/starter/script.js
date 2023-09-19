'use strict';

const modal = document.querySelector('.modal');
const btnOpen = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

// we add the eventListener into every button
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
