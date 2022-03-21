'use strict';

// What is the DOM?
// - DOM stands for 'Document Object Model' which is a structured representation of HTML documents.
// - Allows JavaScript to access HTML elements and styles to manipulate them.
// - (Ex) changes text, HTML attributes, and even CSS styles.
// - They are API's that can be written in JavaScript and applied in the broswer (DOM !== JavaScript).

// selecting 'class' or 'id' from javascript (similar with css)
// reading the text conetent using the 'textContent' property
console.log(document.querySelector('.message').textContent);

// changing the actual text content in the browser
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// use 'value' property for input method
// document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

// an 'event' is something that happens from a certain action (ex. mouse-click, cursor-moving, button-press)
// an 'event listener' is when we are waiting for a certain action to happen
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
});
