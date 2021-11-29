"use strict"; // for avoiding bugs

// #4 Functions Calling Other Functions

// Creating various functions and calling one function from another function is something that is done by developers in a daily basis.
// Being able to call different functions is a great method for structurally building projects.

// Ex) Building a fruit processor and a fruit cutter
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
