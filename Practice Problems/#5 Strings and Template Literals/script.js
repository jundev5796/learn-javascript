// #5 Strings and Template Literals

// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax.

const country = "Republic of Korea";
const continent = "Asia";
let population = 52;
const isIsland = false;
const language = "Korean";

// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
