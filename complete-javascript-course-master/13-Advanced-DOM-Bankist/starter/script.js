'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////
//        Smooth Scrolling

btnScrollTo.addEventListener(`click`, function (e) {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);

  console.log(e.target.getBoundingClientRect());

  console.log(`Current sctoll (X/Y)`, window.pageXOffset, window.pageYOffset);

  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling

  // Oldschool

  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  // New
  section1.scrollIntoView({ behavior: `smooth` });
});

///////////////////////////////////////////////////
// Page Navigation

// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();

//     const id = this.getAttribute(`href`);
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  // Matching strategy

  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

/*
      //        Selecting, Creating and Deleting DOM elements
      
      console.log(document.documentElement);
      console.log(document.head);
      console.log(document.body);
      
      const header = document.querySelector(`.header`);
const allSelection = document.querySelectorAll(`.section`);
console.log(allSelection);

document.getElementById(`#section--1`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`));

// Creating and inserting elements
// .insertAdjacentHTML (in 1st bankist app)

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message); //add the element as the first child
header.append(message); // last
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });

//        Styles, Attributes and Classes

message.style.backgroundColor = `#37383d`;
message.style.width = `105%`;

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height); //real style on the page
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Attributes (src, alt, class, id, etc...)

const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.className);

logo.alt = `Beautiful minimalist logo`;

// Non-Standart
console.log(logo.designer);
console.log(logo.getAttribute(`designer`));
logo.setAttribute(`company`, `Bankist`);

console.log(logo.src);
console.log(logo.getAttribute(`src`));

const link = document.querySelector(`.nav__link--btn`);
console.log(link.href);
console.log(link.getAttribute(`href`));

// Data attributes
console.log(logo.dataset.versionNumber); //Tranform into camelCase

// Classes
logo.classList.add(`c`, `j`);
logo.classList.remove(`c`, `j`);
logo.classList.toggle(`c`);
logo.classList.contains(`c`); // not includes like in array

// Don't use
logo.className = `jonas`;
//
*/

// /*

// */

/*
//        Types of Events and Event Handlers

const h1 = document.querySelector(`h1`);

const alertH1 = function (e) {
  alert(`addEventListener: Great! You are reading the heading`);
};

h1.addEventListener(`mouseenter`, alertH1);

setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 3000);

// OldSchool, better not use
// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great! You are reading the heading`);
// };
*/

//        Event propagation in Practice

/*
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target, e.currentTarget === this);

  // Stop propogation
  // e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target, e.currentTarget);
});

document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`NAV`, e.target, e.currentTarget);
});

*/
//        Delegation
