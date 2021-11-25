"use strict"; // for avoiding bugs

// #1 Functions

// A function is a piece of code that we can re-use multiple times.
// While a variable can hold a single value, a function can hold one or more complete lines of code.

function logger() {
  console.log("My name is John");
}

// We then call the function as many times as we want.

logger();
logger();
logger();

// Ex) Creating a juice from a fruit processor.

// In order to display the 'returned' value, we store the function value in a variable.

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
