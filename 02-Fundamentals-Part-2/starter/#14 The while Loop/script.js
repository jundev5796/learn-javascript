"use strict"; // for avoiding bugs

// #14 The 'while' Loop

// This is essentially the same code as the 'for' loop in a different structure.
// A code will run 'while' a certain codition is true.

// for loop (reference)
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// while loop
let rep = 1;

while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// Example (Rolling a dice)
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
