"use strict"; // for avoiding bugs

// #3 Arrow Function

// An 'arrow function' is a special form of 'function expressions' that is shorter and faster to write.
// We do not need 'curly braces' for arrow functions.
// The 'return' keyword is implicitly activated without actually writing the keyword itself.
// However, when we are writing code with more than one 'parameter', then we need to explicitly write the 'return' keyword again.

// Function Expression (for comparison)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1995);
console.log(age3);

// Arrow Function (with multiple parameters)
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "John"));
