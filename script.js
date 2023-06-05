"use strict";

// Selection of all elements
const modals = document.querySelectorAll(".modal");

const modal1 = document.querySelector(".modal.one");
const modal2 = document.querySelector(".modal.two");
const modal3 = document.querySelector(".modal.three");

const overlays = document.querySelectorAll(".overlay");
const btnCloseModals = document.querySelectorAll(".close-modal");

// // open button modal
const btnsOpenModal1 = document.querySelector(".show-modal-1");
const btnsOpenModal2 = document.querySelector(".show-modal-2");
const btnsOpenModal3 = document.querySelector(".show-modal-3");

// overlay function goes here....
const overlay = function () {
  overlays.forEach((overlay) => {
    overlay.classList.remove("hidden"); // let it display
  });
};
// open modal function goes here......
const openModal = function (modal) {
  modal.classList.remove("hidden");
};
// function that select specific modal
const modalType = function (btnsOpenModal) {
  if (btnsOpenModal === btnsOpenModal1) {
    openModal(modal1);
  } else if (btnsOpenModal === btnsOpenModal2) {
    openModal(modal2);
  } else {
    openModal(modal3);
  }
};
// adding EventListener to the open modal buttons
btnsOpenModal1.addEventListener("click", function () {
  modalType(btnsOpenModal1);
  overlay();
});
btnsOpenModal2.addEventListener("click", function () {
  modalType(btnsOpenModal2);
  overlay();
});
btnsOpenModal3.addEventListener("click", function () {
  modalType(btnsOpenModal3);
  overlay();
});

//close modal function
const closeModal = function () {
  modals.forEach((modal) => {
    modal.classList.add("hidden"); // let it hidden
  });
  overlays.forEach((overlay) => {
    overlay.classList.add("hidden"); // let it hidden
  });
};

// close modal button
btnCloseModals.forEach((btnCloseModal) => {
  btnCloseModal.addEventListener("click", closeModal);
});
// close overlay button
overlays.forEach((overlay) => {
  overlay.addEventListener("click", closeModal);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modals.classList.contains("hidden")) {
    closeModal();
  }
});
