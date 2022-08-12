"use strict";

// NOTES

// What is the DOM?

// - Interface between JavaScript and the browser (HTML document rendered in and by the browser)
// - Use to make JavaScript interact with the browser (ex. create, modify, and delete HTML elements / set styles / listen and respond to events)
// - DOM tree is generated from an HTML document
// - DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree (ex. .querySelector(), .addEventListener())
// - There are various kinds of nodes within the DOM (elements, texts)

// How the DOM API is organized behind the scenes

// - DOM API is divided into differents types of nodes
// - HTML elements inherits methods of properties from their parents
// - The event target is the parent of both the node and window object

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
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics.";
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// inserting elements positionally
// header.prepend(message);
// header.append(message);

// inserting multiple copies of the same element
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// delete elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// --

// 2. Styles, Attributes and Classes

console.log(
  `-----------------------------2. Styles, Attributes and Classes-----------------------------`
);

// styles
// message.style.backgroundColor = "#37383d"; // inline styles: styles directly set within the DOM
// message.style.width = "120%";

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// manually increasing height
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// changing CSS customary variables
// document.documentElement.style.setProperty("--color-primary", "orangered");

// attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);

// console.log(logo.src);
// console.log(logo.getAttribute("src"));

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// console.log(logo.className);

// logo.alt = "Beautiful minimalist log";

// data attributes
// console.log(logo.dataset.versionNumber);

// classes
// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c");

// setting class (don't use!)
// logo.className = "John";

// --

// 3. Implementing Smooth Scrolling

console.log(
  `-----------------------------3. Implementing Smooth Scrolling-----------------------------`
);

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scrol (X/Y)", window.pageXOffset, pageYOffset); // checking for current scroll position

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// --

// 4. Types of Events and Event Handlers

console.log(
  `-----------------------------4. Types of Events and Event Handlers-----------------------------`
);

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading :D");

  // removing an event after a single execution
  // h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// on event property (old way)
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! You are reading the heading :D");
// };

// --

// 5. Event Propagation: Bubbling and Capturing

console.log(
  `-----------------------------5. Event Propagation: Bubbling and Capturing-----------------------------`
);

// - during a click event, the event is generated at the root of the document
// - CAPTURING PHASE: the event travels down all the way to the target element
// - TARGET PHASE: events are handled by event listeners
// - BUBBLING PHASE: after the event, the event travels back to the document
// - the event can also occur in each of the parent element

// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);

  // stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

// --

// 6. Event Delegation: Implementing Page Navigation

console.log(
  `-----------------------------6. Event Delegation: Implementing Page Navigation-----------------------------`
);
