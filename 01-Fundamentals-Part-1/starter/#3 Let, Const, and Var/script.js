// #3 Let, Const, and Var

// 'let' and 'const' are ES6 while 'var' is ES5.

// We use 'let' when we want to reassign the value of a variable in the future.

let age = 30;
age = 21; // changed the age value from 30 to 21

// We use 'const' when we know that the value of a variable will NOT change.
// In a more professional term, const variables are immutable.
// Additionally, 'const' variables cannot have an empty value.
// Overall, it is recommended to use 'const' by default if the value will not change.

const birthYear = 2021;
birthYear = 2020; // this will not work

// The 'var' keyword is an old ES5 method of declaring variables.
// Similar to 'let', variables declared with 'var' can also be reassigned with new values.
// However, 'var' is not similar to 'let'.

var job = "programmer";
job = "biochemist";
