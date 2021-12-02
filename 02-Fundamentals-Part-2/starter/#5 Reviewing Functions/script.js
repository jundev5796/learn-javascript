// #5 Reviewing Functions

// Calling other functions and applying if/else statements
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    // if the 1st condition is satisfied, the return statement immediately exits from the code
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearUntilRetirement(1995, "John"));
console.log(yearUntilRetirement(1970, "Mike"));
