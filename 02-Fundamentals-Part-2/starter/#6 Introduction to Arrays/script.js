"use strict"; // for avoiding bugs

// #6 Introduction to Arrays

// Arrays are used to bundle various values within a container and store them in a variable.
// This

// Without arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// With arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // ['Michael', 'Steven', 'Peter']

// Creating arrays using the 'new Array' keywords
const y = new Array(1991, 1984, 2008, 2020);
console.log(y); // [1991, 1984, 2008, 2020]

// Accessing values stored in an array
console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

// Counting the actual number of values in an array
console.log(friends.length); // 3

// Getting the value of the last element in an array using an 'index'
console.log(friends[friends.length - 1]); // 2

// Replacing elements in an array
friends[2] = "Jay";
console.log(friends); // ['Michael', 'Steven', 'Jay']

// Arrays can hold different types of values all at the same time
const firstName = "John";
const john = [firstName, "Smith", 2037 - 1995, "developer", friends];
console.log(john); // ['John', 'Smith', 42, 'developer', ['Michael', 'Steven', 'Jay']]

// Ex) Calling a function within an array
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
