"use strict";

// NOTES

// What is the DOM?

// - interface between JavaScript and the browser (HTML document rendered in and by the browser)
// - use to make JavaScript interact with the browser (ex. create, modify, and delete HTML elements / set styles / listen and respond to events)
// - DOM tree is generated from an HTML document
// - DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree (ex. .querySelector(), .addEventListener())
// - There are various kinds of nodes within the DOM (elements, texts)

// How the DOM API is organized behind the scenes

// - DOM API is divided into differents types of nodes
// - HTML elements inherits methods of properties from their parents

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault(); // prevents default behavior
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
