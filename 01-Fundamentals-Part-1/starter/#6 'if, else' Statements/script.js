// #6 Taking Decisions: 'if/else' Statements

// We use the if/else statement to create a conditional statement of whether something will be executed or not.
// const isOldEnough = age > 18;

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Waith another ${yearsLeft} years :)`);
}

// This is also called a 'control structure' because it allows us to have more control over the way our code is executed.

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
