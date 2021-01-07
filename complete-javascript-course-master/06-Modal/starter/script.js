'use strict';

// `.` selector is only for querySelector

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnsCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

// classList = style display
const openModal = function () {
  //   console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

// For 1 function action {} not necessarry
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnsCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (event) {
  //   console.log(event.key);
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
