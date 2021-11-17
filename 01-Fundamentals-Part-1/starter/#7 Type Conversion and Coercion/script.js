// #7 Type Conversion and Coercion

// The process of converting one type of data type to another is somthing developers do in a daily basis.

// 1. Type Conversion

// CONVERTING STRINGS TO NUMBERS

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// For data types that we cannot convert to a number, the end-result produces a data type called 'NaN', which stands for 'Not a Number'.
// The data type for 'NaN' is still a number.

console.log(Number("Jonas"));
console.log(typeof NaN);

// CONVERTING NUMBERS TO STRINGS

console.log(String(23), 23);

// 2. Type Coercion

// In cases for type coercion, javascript automatically converts values.
// When a number and a string is together, the number is automatically converted to a string.

console.log("I am " + 23 + " years old");

// However, when we use subtraction with numbers and strings, the result is a number.
// The same is applied with multiplication and division.

console.log("23" - "10" - 3); // 10
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

// PRACTICE

let n = "1" + 1;
n = n - 1;
console.log(n); // 10
