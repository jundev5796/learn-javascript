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

  // The 'this' keyword points to the object which calls the function.
  // calcAge: function () {
  // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    if (this.hadDriversLicense) {
      return `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, and he has ${this.hadDriversLicense ? "a" : "no"} driver's license`;
    }
  },
};

console.log(john.calcAge()); // 42

console.log(john.age);
console.log(john.age);
console.log(john.age);

// -CHALLENGE-
// "John is a 42-year old developer, and he has a driver's license"

console.log(john.getSummary());
