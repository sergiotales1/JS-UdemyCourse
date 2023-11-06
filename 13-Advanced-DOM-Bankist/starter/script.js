'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

////////////////////////////////////////////////////////////////////////

// Page navigation

// document.querySelectorAll('.nav__link').forEach(element => {
//   element.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  console.log(clicked);

  // Activate content area
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${+clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});
/*
const h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.parentNode);
// h1.closest('header').style.backgroundColor = 'var(--color-primary)';

// h1.parentElement.style.backgroundColor = 'blue';
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(.5)';
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

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

/* 

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.currentTarget.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log('LINK');
  console.log(e.currentTarget === this);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log('links');
  console.log(e.target === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget);
    console.log('NAV');
  },
  true
);
*/
