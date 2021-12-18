"use strict"; // for avoiding bugs

// #13 Looping Backwards and Loops in Loops

const johnArray = [
  "John",
  "Smith",
  2037 - 1995,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Looping from the last element
for (let i = johnArray.length - 1; i >= 0; i--) {
  console.log(i, johnArray[i]);
}

// Loops inside another loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
