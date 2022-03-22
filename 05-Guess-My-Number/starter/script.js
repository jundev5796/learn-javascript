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

// creating an initial 'secret number' for the game logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

// an 'event' is something that happens from a certain action (ex. mouse-click, cursor-moving, button-press)
// an 'event listener' is when we are waiting for a certain action to happen
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // in the case where there is no input, equal to, higher, or lower

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // manipulating CSS using DOM
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
