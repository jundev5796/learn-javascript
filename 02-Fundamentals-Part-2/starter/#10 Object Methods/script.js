"use strict"; // for avoiding bugs

// #10 Object Methods

// We can add functions to objects.
const john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1995,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
  hadDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  calcAge: function (birthYear) {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

console.log(john.calcAge()); // 42
// console.log(john["calcAge"](1995)); // 42
