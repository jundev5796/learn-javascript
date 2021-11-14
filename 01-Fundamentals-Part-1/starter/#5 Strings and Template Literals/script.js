// #5 Strings and Template Literals

// Template literal is a much more simplified ES6 method of concatenating strings using variables.
// Using backticks(``), we can easily produce a combination of data types.

const firstName = "John";
const job = "programmer";
const birthYear = 1995;
const year = 2021;

// Common Method

const john =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(john);

// Template Literal

const johnNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(johnNew);

// Multi-line Strings

console.log("String with \n\
multiple \n\
lines");

// Multi-line Strings (Template Literal)

console.log(`String
multiple
lines`);
