"use strict"; // for avoiding bugs

// #2 Function Declarations vs. Expressions

// Function declaration and expression both work the same way.
// However, there are situations where one is recommended than the other.
// What we choose to use solely depend on preferences.
// Recommended use: Function Expression.

// -Function Declaration-
// Can be 'called' before defining the value.

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);

// Functino Expression (function w/o a name)

const calcAge2 = function (birthYear) {
  // function is also a 'value' that can be stored in a variable
  return 2037 - birthYear;
};

const age2 = calcAge2(1995);
console.log(age1, age2);
