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

///////////////////////////////////////
// NOTES
///////////////////////////////////////

// 1. Selecting, Creating, and Deleting Elements

console.log(
  `-----------------------------1. Selecting, Creating, and Deleting Elements-----------------------------`
);

// selecting the entire document/head/body of a webpage
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// selecting using querySelector
const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");
console.log(allSection);

// selecting id's
document.getElementById("section--1");

// if the DOM changes, the HTML collection is updated automatically
const allButtons = document.getElementsByTagName("button"); // returns an HTML collection (different from a node list)
console.log(allButtons);

// selecting only classes
console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics.";
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// inserting elements positionally
// header.prepend(message);
header.append(message);

// inserting multiple copies of the same element
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });
