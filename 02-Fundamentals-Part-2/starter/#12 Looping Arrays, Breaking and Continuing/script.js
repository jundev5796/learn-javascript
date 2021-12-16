"use strict"; // for avoiding bugs

// #12 Looping Arrays, Breaking and Continuing

// Looping through arrays
const johnArray = [
  "John",
  "Smith",
  2037 - 1995,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < johnArray.length; i++) {
  // reading from an existing array
  console.log(johnArray[i]);

  // filling a new array
  // types[i] = typeof johnArray[i];
  types.push(typeof johnArray[i]);
}

console.log(types);

// Looping through arrays (Example)
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < johnArray.length; i++) {
  if (typeof johnArray[i] !== "string") continue; // all the elements that are not 'strings' will be skipped

  console.log(johnArray[i], typeof johnArray[i]);
}

// break
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < johnArray.length; i++) {
  if (typeof johnArray[i] === "number") break;

  console.log(johnArray[i], typeof johnArray[i]);
}
