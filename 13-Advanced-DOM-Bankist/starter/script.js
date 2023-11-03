'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////

/*
// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
// console.log(document.querySelectorAll('.section'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved bla bla bla <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message);
header.append(message);
header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  });

// Styling

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).height);

const height = Number.parseFloat(getComputedStyle(message).height);

message.style.height = height + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'pink');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);

logo.setAttribute('data-version-number', '3.0');
console.log(logo.dataset.versionNumber);
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log(e.target.getBoundingClientRect());

  // Scrolling
  // window.scrollTo({
  //   // this works because we are adding the px that the user scrolled + the px that the section1 has to the top (the account always will result into 628y witch is the position of this section)
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
  console.log(window.scrollX, window.scrollY);
});
