// #2 Data Types

// Data can by either an 'object' or 'primitive'.

// - 7 primitive data types -
// Most common: Number, string, boolean
// Others: undefined, null, symbol(ES2015), BigInt(ES2020)

let age = 23; // number
let firstName = "John"; // string
let fullAge = true; // boolean
let children; // undefined

// JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// Boolean values can only be stored as true or false.

let javascriptIsFun = true;
console.log(javascriptIsFun);

// we can use the 'typeof' keyword to check the data type.

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "John");

// The value of a variable can be changed to any other data type.
// When changing the value of an existing variable, we do not use the 'let' keyword.

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

// 'undefined'

let year;
console.log(year);
console.log(typeof year);

// reassigning the 'undefined' variable to a 'number'.

year = 2021;
console.log(typeof year);

// 'null'

console.log(typeof null);
