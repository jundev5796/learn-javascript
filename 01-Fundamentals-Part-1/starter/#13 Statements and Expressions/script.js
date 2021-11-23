// #13 Statements and Expressions

// An 'expression' is bascially a piece of code that produces a value.

console.log(3 + 4); // 7
console.log(2021); // 2021
console.log(true && false && !false); // false

// A 'statement' a larger piece of code that is executed and does not produce a value on itself.
// It just declares a variable but doe not produce a value.
// The goal of statements is to translate actions that the code will eventually perform.
// HINT: anything that ends with a semicolon(;) is essentially a statement.

if (23 > 10) {
  const str = "23 is bigger";
}
